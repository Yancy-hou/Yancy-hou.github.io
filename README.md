# Yucun Hou - Homepage

Academic personal homepage.

## Online

Visit **https://yancy-hou.github.io/** after deploying to GitHub Pages.

## Local Preview

1. Edit `data/content.json`, then run in project directory:
   ```powershell
   powershell -ExecutionPolicy Bypass -File build.ps1
   ```
2. Open `index.html` in browser (no local server needed)

## Customization

Edit `data/content.json` only. Content is separated from structure.

Fields:
- `name`, `subtitle`, `affiliation`, `address`, `email`: Header info
- `social`: Array of `{ name, url }` for links
- `biography`: Bio text
- `news`: Array of `{ date, text }`
- `publications`: Array of `{ citation, pdf?, code? }`
- `activities`: List of service items

Profile photo: Put `profile.png` in `images/` folder.

> Run `build.ps1` after editing content.json, then open index.html.

## Deploy to GitHub Pages

1. Push to `Yancy-hou/Yancy-hou.github.io`
2. Settings → Pages → Source: main branch
3. Visit https://yancy-hou.github.io/ after a few minutes
