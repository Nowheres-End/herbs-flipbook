# Nowhere’s End Herbarium

A 24-leaf botanical field guide to the herbs in Nowhere’s End absinthe blends. This repository contains an editable presentation source, a native Google Slides deck export, generated botanical plates, QR codes for Terpedia organism records, TTB label art used as blend markers, and a browser flipbook with page-turn animation.

## Open the web flipbook

Serve this directory over HTTP (the page loads `data/herbs.json`):

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. The viewer supports page arrows, keyboard arrows/Page Up/Page Down, and touch swipes. The flipbook is static and ready to host from GitHub Pages or another static host; it is not published publicly by this repository.

## Presentation

`output/Nowheres-End-Herbarium.pptx` is the landscape 16:9 deck source used to create the native Google Slides presentation. Each botanical has a generated illustration, a concise summary of traditional or historical uses, a QR code, and clickable TTB label thumbnails for the blends that list it.

## Sources and caveat

Blend membership comes from the current public Nowhere’s End herb library. TTB label records identify the label art and product name; they do not establish herb membership. Historical medicinal descriptions are provided as context, not evidence of efficacy or medical advice. Absinthe is an alcoholic beverage, not medicine. See [`references/source-notes.md`](references/source-notes.md) for sources and QR availability notes.

Generated botanical illustrations are original AI-created assets. Blend label thumbnails are TTB-submitted art retrieved from public label records via public image mirrors; each links to its official TTB COLA record.

The web book uses the vendored HTML page-turn engine [StPageFlip (`page-flip@2.0.7`)](https://github.com/Nodlik/StPageFlip), under MIT; license is included in `assets/vendor`. It opens on a closed cover and gives each herb its own two-page landscape spread.
