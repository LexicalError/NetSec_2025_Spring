from PIL import Image

def rewrite_palette(image_path, output_path, white_index=0):
    # Open image
    img = Image.open(image_path)

    if img.mode != 'P':
        raise ValueError("Image must be in palette (P) mode")

    # Create a new palette with all black
    new_palette = [0, 0, 0] * 256

    # Set one entry to white
    for i in range(0, white_index):
        new_palette[(127 + i) * 3: (127 + i)* 3 + 3] = [255, 255, 255]

    # Apply new palette
    img.putpalette(new_palette)

    # Save
    img.save(output_path)

# Example usage
for i in range(0, 128):
    rewrite_palette('ctf-example.png', f'imgs/output127_{i}.png', i)