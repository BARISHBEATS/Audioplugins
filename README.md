# BARISH BEATS — GitHub Pages

Fertige statische Website ohne Build-Schritt. Website-Sprache: Englisch.

## Hochladen und veröffentlichen

1. ZIP entpacken und auf GitHub ein neues Repository erstellen, für die einfache kostenlose Pages-Nutzung öffentlich.
2. Im Repository **Add file → Upload files** wählen. Den **Inhalt** dieses Ordners hochladen: `index.html`, `styles.css`, `script.js`, den vollständigen Ordner `assets` und optional die Dokumentation sowie `.nojekyll`. `index.html` muss direkt auf der obersten Repository-Ebene liegen. Nicht die ZIP-Datei hochladen.
3. Mit **Commit changes** speichern.
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch** auswählen.
5. Branch **main**, Ordner **/ (root)** auswählen und **Save** klicken.
6. Nach der Veröffentlichung erscheint unter **Settings → Pages** die Website-Adresse. Bei einem Projekt-Repository lautet sie üblicherweise `https://DEIN-NAME.github.io/DEIN-REPOSITORY/`.

## Vorschau

`index.html` direkt im Browser öffnen. Es ist kein Paketmanager und kein Build notwendig. Alle Bilder und Schriften funktionieren ohne externe Dienste.

## Inhalt und Downloads

- Genau vier Produkte: AIR BRO, VOX BRO, KLIPA BRO und KEY BRO.
- Eigene anklickbare Detailbereiche mit Hash-Adressen, beispielsweise `#/plugins/key-bro`. Dadurch funktionieren Direktlinks auf GitHub Pages ohne Server-Routing.
- Alle Plattform-Angebote und der All-Installer sind sichtbar **Coming soon** und deaktiviert. Es gibt keine erfundenen Download-URLs.
- Vorhandene Entwicklungspakete aus anderen Projektordnern wurden nicht als öffentliche Releases übernommen.
- Für eine spätere Freigabe die tatsächlichen geprüften Installer bereitstellen und die deaktivierten Buttons in `index.html` und `downloadButtons()` in `script.js` durch echte Download-Links ersetzen. Verfügbarkeit und Status erst dann aktualisieren.
- Produkttexte und Bilder werden in `PLUGINS` in `script.js` gepflegt.

## Design und Original-Assets

Basis: die bereitgestellte `BARISH_BEATS_website_preview.html`. Farben, Typografie, Navigation, Seitenaufteilung und Grundgestaltung stammen daraus. Die Hero-Komposition wurde auf vier gleich große, leicht versetzte Vorschauen erweitert. Der unscharfe Hintergrund der Vorlage war selbst ein Bild der alten gesamten Website; er wurde durch einen sauberen anthrazitfarbenen Hintergrund mit dezenten Orange-Lichtern ersetzt, damit keine alten Produktnamen im Hintergrund erscheinen.

Siehe `ASSETS.md` für Herkunft und bekannte ältere Beschriftungen. Das BARISH-Logo wurde nicht nachgezeichnet oder verändert. Es sind keine künstlichen Plugin-Platzhalter enthalten.

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
