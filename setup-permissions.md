# Setting Up API Permissions

Since you're getting 403 errors, follow these steps to manually configure the permissions:

## Steps:

1. **Go to Strapi Admin**: http://localhost:1337/admin

2. **Navigate to Settings**:
   - Click "Settings" in the left sidebar
   - Click "Users & Permissions Plugin" 
   - Click "Roles"

3. **Configure Public Role**:
   - Click on "Public" role
   - Scroll down to find "Link" and "User-profile" sections
   - For **Link**: Check the boxes for:
     - `find` 
     - `findOne`
   - For **User-profile**: Check the box for:
     - `find`
   - Click "Save" button

4. **Test the API**:
   - Visit http://localhost:3000 
   - The page should now load without 403 errors

## Alternative: Quick API Test
You can test if it's working by running:
```bash
curl "http://localhost:1337/api/links"
curl "http://localhost:1337/api/user-profile"
```

Both should return JSON data instead of 403 errors.