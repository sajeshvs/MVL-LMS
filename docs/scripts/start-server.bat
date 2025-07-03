@echo off
echo ===================================
echo MVL-LMS Local Development Server
echo ===================================
echo.
echo Starting local server to avoid CORS issues...
echo.
echo The website will be available at:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
pause
