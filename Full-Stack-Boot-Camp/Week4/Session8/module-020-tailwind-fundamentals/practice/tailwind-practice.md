1. Create a new html page.
2. Integrate Tailwind

```html
<!-- put this right above </head> -->
<script
  defer
  src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
></script>
```

3. Try typing out from this code snippet to create your own navigation on the page.
   - Cross reference on the tailwind cheatsheet for any class you don't understand
   - Make sure to type this out and not copy

```html
<nav class="flex justify-between items-center p-4 bg-gray-800">
  <div class="text-white font-bold flex items-center">
    <img
      src="https://img.logo.dev/logo.dev"
      class="h-8 w-8 mr-2"
      alt="randomlogo"
    />
    <span>My Brand</span>
  </div>
  <div class="space-x-4">
    <a href="#" class="text-gray-300 hover:text-white">Home</a>
    <a href="#" class="text-gray-300 hover:text-white">About</a>
  </div>
</nav>
```

## Stretch Goal!

- Now make it your own!
- Change colors
- Change hover states
- Add animation
- Go for it!
