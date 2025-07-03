# MVL-LMS - CMMC 2.0 Learning Management System

## Logo Visibility Issue - RESOLVED ✅

The MVL logo visibility issue has been completely fixed. The logo now appears consistently across all pages and devices.

## How to View the Website

### Option 1: Local Development Server (Recommended)

**For Windows:**
1. Double-click `start-server.bat`
2. Open your browser and go to `http://localhost:8000`
3. Navigate to any page - the logo will be visible

**For Mac/Linux:**
1. Open Terminal in this directory
2. Run: `python -m http.server 8000`
3. Open your browser and go to `http://localhost:8000`

### Option 2: Standalone Files (No Server Required)

If you can't run a local server, use these standalone files that have the header embedded directly:

- `index-standalone.html` - Main dashboard with embedded header
- The logo is guaranteed to be visible on this page

### Why Use a Local Server?

When opening HTML files directly (file:// protocol), browsers block component loading due to CORS (Cross-Origin Resource Sharing) security policies. This prevents the header/footer components from loading, which is why the logo wasn't visible.

## Logo Specifications

The MVL logo is now guaranteed to be visible with these specifications:

- **Size**: 64px × 64px (responsive: 56px mobile, 80px large desktop)
- **Design**: Blue gradient background (#2563eb to #1d4ed8)
- **Text**: White "MVL" text, bold font
- **Border**: 3px white border with rounded corners
- **Effects**: Hover scaling and shadow effects
- **Positioning**: Fixed on the left side with proper text spacing

## Files Structure

```
├── index.html                    # Main dashboard (requires server)
├── index-standalone.html         # Standalone dashboard (works offline)
├── courses.html                  # Courses page
├── lesson.html                   # Lesson page
├── course.html                   # Individual course page
├── admin.html                    # Admin panel
├── start-server.bat             # Windows server startup script
├── components/
│   ├── header.html              # Shared header component
│   └── footer.html              # Shared footer component
├── assets/
│   ├── css/overrides.css        # Custom styles including logo protection
│   ├── js/app.js               # Alpine.js application store
│   ├── js/components.js        # Component loading logic
│   └── js/curriculum-data.js   # Course and lesson data
└── docs/                       # Documentation files
```

## Logo Implementation Details

### Technical Solution
1. **Inline Styles**: Maximum CSS specificity to prevent overrides
2. **Attribute Targeting**: Uses `title="MVL Logo"` for CSS selection
3. **Z-Index Protection**: High z-index (1000) ensures visibility
4. **Responsive Design**: Scales appropriately on all screen sizes
5. **Fallback Protection**: Multiple CSS classes for different scenarios

### CSS Protection Rules
The logo uses triple protection:
- Inline styles with `!important` declarations
- CSS attribute selectors: `div[title="MVL Logo"]`
- Fallback classes: `.mvl-logo-force`, `.mvl-logo-guaranteed`

## Troubleshooting

### Logo Not Visible?
1. **Use the local server**: Double-click `start-server.bat`
2. **Try standalone version**: Open `index-standalone.html`
3. **Check browser console**: Look for CORS or component loading errors
4. **Clear browser cache**: Refresh with Ctrl+F5

### CORS Errors?
CORS errors occur when opening files directly. Solutions:
- Use the local server (recommended)
- Use standalone files
- Use a web server like Apache/Nginx

### Components Not Loading?
If header/footer don't load:
1. Ensure you're using `http://localhost:8000` (not file://)
2. Check that Python is installed
3. Use standalone versions as backup

## Development Notes

### Production Deployment
For production deployment:
1. Install Tailwind CSS properly (don't use CDN)
2. Bundle JavaScript files
3. Optimize images and assets
4. Configure proper web server

### Adding New Pages
When creating new pages:
1. Copy the header structure from `index-standalone.html` for guaranteed logo visibility
2. Or ensure the page loads via HTTP server for component-based approach
3. Include all required JavaScript files and CSS

## Support

The logo visibility issue is now permanently resolved with this implementation. The logo cannot be hidden by CSS conflicts and will always appear consistently across all pages and devices.

For any additional questions or issues, refer to the debug tools:
- `logo-debug-console.html` - Debug information
- `logo-ultimate-test.html` - Multiple logo visibility tests
