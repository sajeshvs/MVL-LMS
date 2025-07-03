# NIST SP 800-171r3 Sample Data

This directory should contain the official NIST SP 800-171 Rev 3 spreadsheet.

## Download Instructions

1. Visit: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html
2. Download the Excel spreadsheet version (if available)
3. Place it in this directory as `NIST_SP_800-171_rev3.xlsx`
4. Run `npm run gen-curriculum` to generate the curriculum.js file

## Expected Columns

The script expects the following columns in the spreadsheet:
- `Control Identifier` or `Control ID` - The control number (e.g., "3.1.1")
- `Control Name` or `Name` - The control title
- `Control Text` or `Requirement` - The detailed requirement text
- `Discussion` or `Supplemental Guidance` - Additional guidance (optional)

## Alternative: Manual Sample Data

If you don't have access to the official spreadsheet, you can create a CSV file with sample data for testing purposes.
