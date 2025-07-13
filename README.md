# Keguri Links 🐸

A static link tree site hosted on GitHub Pages.

## How to Update Links

You can easily update the links by editing the `public/data.json` file:

### 1. Edit the Profile
Update the profile section in `public/data.json`:

```json
{
  "profile": {
    "name": "Keguri",
    "bio": "Artist, creator, and all-around amazing person ✨",
    "profilePicture": "/profile.jpg",
    "backgroundColor": "#ffffff",
    "textColor": "#000000"
  }
}
```

### 2. Add/Edit Links
Add new links to the `links` array:

```json
{
  "id": 5,
  "title": "TikTok",
  "url": "https://tiktok.com/@keguri",
  "description": "Check out my short videos",
  "avatar": "/tiktok-icon.png",
  "order": 5,
  "isActive": true
}
```

### 3. Link Properties
- **title**: The name of the link (e.g., "Instagram")
- **url**: The full URL to link to
- **avatar**: Path to icon image (optional)
- **isActive**: Set to `false` to hide a link

### 4. Adding Images
1. Put image files in the `public/` folder
2. Reference them in the JSON (e.g., `/profile.jpg`)

### 5. Deploy Changes
After editing the JSON file:
1. Commit the changes
2. Push to GitHub
3. The site updates automatically

## Local Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

