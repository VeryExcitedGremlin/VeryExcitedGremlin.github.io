## Integrate Google fonts into your Bio Page (either the css or bootstrap one)

1. Visit Google Fonts and find one you like
   - https://fonts.google.com/
2. Click through to the font page (i.e. https://fonts.google.com/specimen/Edu+NSW+ACT+Cursive)
   - Click Get Font
   - Click Get Embed Code
3. Copy the link embed code under the "Web" tab

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&family=Edu+NSW+ACT+Cursive:wght@400..700&display=swap" rel="stylesheet">
```

4. Paste this right above your </head>

5. Make sure update your body tag within the css to target the font

```html
body { font-family: DynaPuff, sans-serif; }
```

6. Your new font should display

### Stretch Goal

- Add multiple fonts (2-3 total)
- Change font colors
- Try integrating with Google Icons
