from PIL import Image

# Load your PNG image
image = Image.open("ctf-example.png")

# Check if it has a palette (mode should be 'P' for paletted)
if image.mode == 'P':
    palette = image.getpalette()
    # The palette is a flat list of RGB triples
    # So we group every 3 values into one RGB tuple
    palette_colors = [tuple(palette[i:i+3]) for i in range(0, len(palette), 3)]

    # Print first few colors
    for i, color in enumerate(palette_colors):
        print(f"{color}")

else:
    print("Image does not use a palette (not in mode 'P').")
