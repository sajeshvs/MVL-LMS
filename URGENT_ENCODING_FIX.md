# URGENT: Character Encoding Fix Instructions
**Date:** July 3, 2025  
**Status:** Manual intervention required

## 🚨 Problem

Character encoding issues are visible in browser as:
- "CMMC v2 â€" AC.L2-3.1.1" (should be "CMMC v2 - AC.L2-3.1.1")
- "score (83â†'90)" (should be "score (83->90)")

## 🛠️ Manual Fix Required

**Use VS Code Find & Replace (Ctrl+H) on `assets/js/curriculum-data.js`:**

1. Find: `â€"` → Replace: `-` (em dash)
2. Find: `â†'` → Replace: `->` (arrow)  
3. Find: `â€¢` → Replace: `*` (bullet)

## ⚡ Quick Test
After replacing, refresh browser and check that it shows:
"CMMC v2 - AC.L2-3.1.1" correctly.

---
**Priority: CRITICAL** - Affects user experience
