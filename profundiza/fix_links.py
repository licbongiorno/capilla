import os
import glob

def fix_links():
    html_files = glob.glob("*.html")
    fixed_count = 0

    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. Fix "Inicio" from three levels up
        content = content.replace('href="../../../index.html"', 'href="../index.html"')
        
        # 2. Fix "Profundizar" to just index.html under the same folder
        content = content.replace('href="../profundiza.html"', 'href="index.html"')
        
        # 3. Fix "Ayudanos" just in case they are ../../ayudanos.html
        content = content.replace('href="../../ayudanos.html"', 'href="../ayudanos.html"')
        
        if content != original_content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed_count += 1
            print(f"Fixed links in {file}")

    print(f"Links updated successfully in {fixed_count} profundiza htmls.")

if __name__ == "__main__":
    fix_links()
