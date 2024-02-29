# hiddify.com

This website is a static website built with vanilla JS and Tailwind.

## Development

```bash
tailwindcss -i ./input.css -o ./docs/assets/output.css --watch
```

You can serve the docs folder with an HTTP server:

```bash
ruby -run -e httpd docs -p 9090
# or
python -m http.server 9090 --directory docs
# or
php -S localhost:9090 -t docs
```

Then open the browser and go to `http://localhost:9090`.

## Deployment

Run the tailwindcss command with the --minify flag to minify the output CSS file:

```bash
tailwindcss -i ./input.css -o ./docs/assets/output.css --minify
```
