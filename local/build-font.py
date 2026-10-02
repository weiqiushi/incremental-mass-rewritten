"""Rebuild the display font subset from an upstream Noto Sans SC Regular OTF.

Usage: python3 local/build-font.py /path/to/NotoSansSC-Regular.otf
Requires fonttools and brotli. The bundled output is sufficient to run the game.
"""
import sys
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

folder = Path(__file__).resolve().parent
source = Path(sys.argv[1])
texts = [folder / "lang/zh-CN.js", folder / "time-speed.js"]
characters = set("".join(file.read_text(encoding="utf-8") for file in texts))
characters.update(chr(code) for code in range(32, 127))
font = TTFont(source)
available = set(font.getBestCmap())
missing = sorted(ord(char) for char in characters if ord(char) >= 0x3400 and ord(char) not in available)
if missing:
    raise SystemExit("Source font lacks characters: " + ", ".join(f"U+{code:04X}" for code in missing))
options = subset.Options()
options.flavor = "woff2"
options.name_IDs = [0, 1, 2, 3, 4, 5, 6, 13, 14, 16, 17]
subsetter = subset.Subsetter(options=options)
subsetter.populate(unicodes={ord(char) for char in characters})
subsetter.subset(font)
# Use a distinct family name for this modified OFL font.
for record in font["name"].names:
    names = {1: "IMR Chinese Subset", 2: "Regular", 3: "IMRChineseSubset-Regular", 4: "IMR Chinese Subset Regular", 6: "IMRChineseSubset-Regular", 16: "IMR Chinese Subset", 17: "Regular"}
    if record.nameID in names:
        record.string = names[record.nameID].encode(record.getEncoding())
font.flavor = "woff2"
target = folder / "fonts/IMRChineseSubset.woff2"
target.parent.mkdir(exist_ok=True)
font.save(target)
print(f"Wrote {target.name}: {target.stat().st_size} bytes")
