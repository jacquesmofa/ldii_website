## 🚀 CI/CD & Security Protocol

### Deployment Pipeline
This project uses **GitHub Actions** for automated deployment. 
- **Trigger:** Any push to the `main` branch.
- **Process:** The app is built locally in the runner (`npm run build`) and synced via FTP to HostPapa.
- **Sync Logic:** Uses `.ftp-deploy-sync-state.json` to manage incremental updates.

### Credentials Management
All server credentials (IP, FTP Username, Password) are stored in **GitHub Secrets**. 
- DO NOT hardcode credentials in the YAML file.
- If the cPanel password is changed, update the `HOSTPAPA_PASSWORD` secret immediately to prevent pipeline failure.

### Server Environment (HostPapa)
- **Path:** `/home/ldiinitiatives/public_html`
- **Routing:** Handled by `.htaccess` to support React Router (Single Page Application).
- **Security:** Manual uploads to `public_html` are discouraged as the CI/CD pipeline may overwrite them to maintain a clean state.