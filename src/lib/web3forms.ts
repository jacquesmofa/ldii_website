/**
 * Web3Forms integration for LDII.
 *
 * Every form on the website is delivered to the LDII inbox through the
 * official Web3Forms access key below. The key is a public client-side key,
 * so it is safe to ship in the browser bundle.
 */

export const WEB3FORMS_ACCESS_KEY = '52326314-06b9-40de-b232-342d664b36d1';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export type SubmitResult = {
  ok: boolean;
  message: string;
};

const GENERIC_ERROR = 'Something went wrong while sending your message. Please try again, or email us at info@ldiinitiatives.org.';

const HONEYPOT_FIELD = 'website_alt';

const asText = (value: string | File | null): string => {
  if (typeof value !== 'string') return '';
  return value.trim();
};

type SubmitOptions = {
  /** Subject line shown in the LDII inbox. */
  subject: string;
  /** Extra context fields (form name, page, etc). */
  extra?: Record<string, string>;
};

/**
 * Submits a real DOM form to the LDII Web3Forms inbox.
 * The honeypot is checked first; when it is filled the request is silently
 * skipped and a normal success message is returned so bots learn nothing.
 */
export async function submitFormToInbox(
  form: HTMLFormElement,
  options: SubmitOptions
): Promise<SubmitResult> {
  const formData = new FormData(form);

  if (asText(formData.get(HONEYPOT_FIELD))) {
    return { ok: true, message: 'Thank you! Your message has been received.' };
  }

  const payload: Record<string, string> = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: options.subject,
    from_name: 'LDII Website',
    ...(options.extra || {}),
  };

  formData.forEach((value, key) => {
    if (key === HONEYPOT_FIELD || key === 'access_key') return;
    const text = asText(value);
    if (!text) return;
    payload[key] = text;
  });

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    let parsed: any = null;
    try {
      parsed = responseText ? JSON.parse(responseText) : null;
    } catch {
      parsed = null;
    }

    const serverMessageRaw =
      parsed?.message ?? parsed?.meta?.message ?? parsed?.meta?.detail ?? responseText;
    const serverMessage = typeof serverMessageRaw === 'string' ? serverMessageRaw.trim() : '';

    const isSuccess = response.ok && parsed?.success === true;

    if (isSuccess) {
      return {
        ok: true,
        message: 'Thank you! Your message has reached our inbox. We will get back to you soon.',
      };
    }

    if (serverMessage.toLowerCase().includes('spam')) {
      return {
        ok: false,
        message: 'Your submission could not be verified. Please try again.',
      };
    }

    return {
      ok: false,
      message: serverMessage || GENERIC_ERROR,
    };
  } catch {
    return {
      ok: false,
      message: 'We could not reach the mail service. Please check your connection and try again.',
    };
  }
}