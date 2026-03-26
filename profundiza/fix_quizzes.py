import os
import re

directory = r"g:/proyectos/paginas web/capilla santa ana/iglesia mejorada/profundiza"
quiz_files = ["quiz-6-7.html", "quiz-8-9.html", "quiz-10-11.html", "quiz-12-15.html", "quiz-16-18.html", "quiz-18.html"]

html_modal = """    <div class="float-container">
        <button aria-label="Ayudar a la Capilla" class="f-btn" onclick="abrirModalDonar()">
            <i class="fas fa-heart corazon-late"></i>
        </button>
    </div>

    <div id="modalDonar" class="modal" role="dialog" aria-modal="true" tabindex="-1">
        <div class="modal-content">
            <button class="modal-close" onclick="cerrarModalDonar()" aria-label="Cerrar ventana">
                <i class="fas fa-times"></i>
            </button>
            <i class="fas fa-hand-holding-heart corazon-late" style="font-size: 4rem; color: var(--acento); margin-bottom: 20px;"></i>
            <h3 style="margin-bottom:15px; color: var(--primario); font-size: 2.2rem; font-family: 'Playfair Display', serif;">Sumá tu Corazón</h3>
            <p style="font-size: 1.05rem; opacity: 0.9; margin-bottom: 25px; line-height: 1.6; color: #333;">Cada aporte, grande o pequeño, es un abrazo a nuestra comunidad. Gracias a tu generosidad, mantenemos las puertas abiertas, sostenemos el ropero comunitario y Cáritas, y hacemos posible nuestra labor pastoral. <strong>¡Que Dios multiplique tu ayuda!</strong></p>
            <div class="alias-box" style="margin-bottom: 10px;">
                <span id="alias-modal">capillas.fatima.ag</span>
            </div>
            <p style="font-size: 0.9rem; color: #555; margin-bottom: 25px; font-weight: 600;">Destinatario: Parroquia De Nuestra Señora De Fátima</p>
            <button class="btn btn-primary" onclick="copiarAliasModal(this)" style="width: 100%; margin-bottom: 30px; font-size: 1.1rem; padding: 15px; border-radius: 50px; border: none; cursor: pointer; background: var(--acento); color: white; font-weight: bold;"><i class="far fa-copy"></i> Copiar Alias</button>
            <div style="border-top: 1px solid rgba(0,0,0,0.1); padding-top: 25px;">
                <p style="font-size: 0.95rem; font-weight: 600; margin-bottom: 15px; color: #333;">Una vez hecha la transferencia, te pedimos que nos compartas el comprobante:</p>
                <a href="https://wa.me/5493517023789?text=Hola!%20Les%20paso%20el%20comprobante%20de%20mi%20donaci%C3%B3n%20a%20la%20Capilla.%20%C2%A1Bendiciones!" target="_blank" style="background: #25D366; color: white; width: 100%; margin-bottom: 25px; padding: 15px; border-radius: 50px; text-decoration: none; display: inline-block; font-weight: bold;"><i class="fab fa-whatsapp"></i> Compartir Comprobante</a>
            </div>
            <div style="border-top: 1px solid rgba(0,0,0,0.1); padding-top: 20px;">
                <a href="ayudanos.html" style="color: var(--primario); font-weight: 700; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px;"><i class="fas fa-hands-helping"></i> Ver otras formas de colaborar</a>
            </div>
        </div>
    </div>
"""

for f in quiz_files:
    filepath = os.path.join(directory, f)
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Remove the html_modal from wherever it currently is using string replace
    content = content.replace(html_modal + '\n', '<script>')
    content = content.replace(html_modal, '<script>')

    # Ensure no duplicate scripts are left around if replacement caused issues
    
    # Also I need to place it correctly. The correct place is right before `<footer class="mazo-footer">` or just before the final `<script>` block.
    # The final script block starts with `<script>\n// BASE DE DATOS`
    
    # First, undo the mistake completely. In my previous script I did:
    # content = re.sub(r'<script>', html_modal + '\n<script>', content, count=1)
    # The first `<script>` was:
    # <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    # So it resulted in:
    # <script async src="...">
    # html_modal
    # <script>
    #       window.dataLayer = window.dataLayer || [];
    
    # It split `<script>` into two!
    # Let me just replace the exact injection:
    bad_injection = html_modal + "\n<script>"
    content = content.replace(bad_injection, "<script>")
    
    # Now, inject it before the LAST <script> tag which contains the DB.
    # We can split by <script> and insert it before the last one.
    parts = content.rsplit("<script>", 1)
    if len(parts) == 2:
        content = parts[0] + html_modal + "\n<script>" + parts[1]
    
    with open(filepath, 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"Fixed {f}")
