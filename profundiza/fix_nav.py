import os
import glob
import re

def fix_all():
    html_files = glob.glob("*.html")
    fixed_count = 0
    pattern = re.compile(r'<ul class="nav-links">.*?</ul>', re.DOTALL)

    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        def replacer(match):
            text = match.group(0)
            text = re.sub(r'<a href="[^"]*">Inicio</a>', r'<a href="../index.html">Inicio</a>', text)
            text = re.sub(r'<a href="[^"]*"([^>]*)>Profundizar</a>', r'<a href="index.html"\1>Profundizar</a>', text)
            text = re.sub(r'<a href="[^"]*">Ayudanos</a>', r'<a href="ayudanos.html">Ayudanos</a>', text)
            return text
            
        content = pattern.sub(replacer, content)
        content = re.sub(r'<a href="[^"]*" class="nav-brand">', r'<a href="../index.html" class="nav-brand">', content)
        
        if content != original:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed_count += 1
            print(f"Fixed {file}")

    print(f"Done. Fixed {fixed_count} files.")

if __name__ == "__main__":
    fix_all()
