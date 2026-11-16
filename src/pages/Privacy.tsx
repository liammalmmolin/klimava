import { LegalLayout } from "@/components/LegalLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t, language } = useLanguage();

  return (
    <LegalLayout
      eyebrow={t("Juridik", "Legal")}
      title={t("Integritetspolicy", "Privacy Policy")}
      updated={language === "sv" ? "16 november 2026" : "November 16, 2026"}
    >
      {language === "sv" ? (
        <>
          <section>
            <h2>1. Vilka vi är</h2>
            <p>
              Klimava är en app och webbplats (klimava.se) som gör hållbara val i vardagen mätbara och
              belönande. Klimava drivs av grundarteamet bakom Klimava, Täby. Har du frågor om hur vi
              hanterar dina uppgifter kan du kontakta oss på{" "}
              <a href="mailto:klimavauf@gmail.com">klimavauf@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>2. Vilka uppgifter vi samlar in</h2>
            <ul>
              <li>
                Kontouppgifter du själv anger, t.ex. namn och e-post, samt profilbild om du väljer att
                lägga till en.
              </li>
              <li>
                Leveransuppgifter (namn, e-post, adress och telefonnummer) när du löser in en belöning som
                skickas till dig.
              </li>
              <li>
                Foton och skärmdumpar av kvitton som du väljer att ladda upp, för att via OCR identifiera
                produkter och avgöra vilka poäng ett köp ger.
              </li>
              <li>
                Platsdata (GPS) när du använder återvinningsscannern. Din position används på telefonen för
                att bekräfta att du befinner dig vid en återvinningsstation. Vi sparar bara vilken station
                du skannade vid, inte dina koordinater.
              </li>
              <li>Meddelanden och skärmdumpar som du skickar via feedback i appen.</li>
              <li>
                Aktivitet i appen: samlade poäng, utmaningar, topplistor och inlösta belöningar. Om du
                väljer att synas i den offentliga topplistan visas ditt namn, din profilbild och dina
                poäng för andra användare.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Hur vi använder uppgifterna</h2>
            <p>
              Uppgifterna används för att räkna ut poäng, visa din klimatpåverkan, driva topplistor och
              utmaningar, samt för att du ska kunna lösa in belöningar hos våra samarbetspartners. Vi
              säljer inte dina personuppgifter till tredje part.
            </p>
            <p>
              Kvitton läses i första hand direkt på din enhet. Om telefonen inte kan läsa en bild själv
              kan bilden skickas till tjänsten OCR.space för textigenkänning. Ingen kontoinformation
              skickas med. För kvitton från mat- och second hand-köp matchas produkter mot vår
              produktdatabas för att avgöra vilka poäng ett köp ger.
            </p>
          </section>

          <section>
            <h2>4. Delning med samarbetspartners och tjänsteleverantörer</h2>
            <p>
              När du löser in en belöning hos en partner (t.ex. SL, Tradera, Plick eller någon av våra
              övriga partners) delas endast den information som krävs för att du ska kunna ta del av
              erbjudandet, t.ex. en rabattkod eller bekräftelse på att villkoren är uppfyllda.
            </p>
            <p>
              Vi använder dessa tjänster för att appen ska fungera: Supabase (databas och lagring inom
              EU), Open Food Facts (produktinformation från streckkoder, inga personuppgifter), OCR.space
              (textigenkänning av kvittobilder när telefonen inte klarar det själv), Sightengine
              (automatisk granskning av profilbilder för olämpligt innehåll) och Apple (inloggning med
              Apple).
            </p>
          </section>

          <section>
            <h2>5. Cookies på klimava.se</h2>
            <p>
              Webbplatsen klimava.se använder inga tredjeparts spårnings- eller analyscookies idag. Om
              det ändras kommer den här policyn att uppdateras.
            </p>
          </section>

          <section>
            <h2>6. Dina rättigheter</h2>
            <p>
              Enligt GDPR har du rätt att få tillgång till, rätta, radera eller exportera dina
              personuppgifter. Kontakta oss på <a href="mailto:klimavauf@gmail.com">klimavauf@gmail.com</a>{" "}
              för att utöva dina rättigheter. Du har också rätt att klaga hos Integritetsskyddsmyndigheten
              (IMY).
            </p>
          </section>

          <section>
            <h2>7. Kontakt</h2>
            <p>
              Frågor om integritet: <a href="mailto:klimavauf@gmail.com">klimavauf@gmail.com</a>
              <br />
              Support i appen: <a href="mailto:support@klimava.com">support@klimava.com</a>
            </p>
          </section>
        </>
      ) : (
        <>
          <section>
            <h2>1. Who we are</h2>
            <p>
              Klimava is an app and website (klimava.se) that makes everyday sustainable choices
              measurable and rewarding. Klimava is run by the founding team behind Klimava, Täby, Sweden.
              For questions about how we handle your data, contact us at{" "}
              <a href="mailto:klimavauf@gmail.com">klimavauf@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>2. What data we collect</h2>
            <ul>
              <li>
                Account details you provide, such as name and email, and a profile photo if you choose to
                add one.
              </li>
              <li>
                Delivery details (name, email, address and phone number) when you redeem a reward that is
                shipped to you.
              </li>
              <li>
                Photos and screenshots of receipts you choose to upload, used via OCR to identify products
                and determine the points a purchase earns.
              </li>
              <li>
                Location data (GPS) when you use the recycling scanner. Your position is used on your
                phone to confirm you are at a recycling station. We only save which station you scanned
                at, not your coordinates.
              </li>
              <li>Messages and screenshots you send through in-app feedback.</li>
              <li>
                In-app activity: points earned, challenges, leaderboards and redeemed rewards. If you
                choose to appear on the public leaderboard, your name, profile photo and points are shown
                to other users.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. How we use the data</h2>
            <p>
              Data is used to calculate points, show your climate impact, run leaderboards and challenges,
              and let you redeem rewards from our partners. We do not sell your personal data to third
              parties.
            </p>
            <p>
              Receipts are read on your device first. If your phone cannot read an image itself, the
              image may be sent to the OCR.space service for text recognition. No account information is
              sent with it. For grocery and second-hand receipts, products are matched against our product
              database to determine the points a purchase earns.
            </p>
          </section>

          <section>
            <h2>4. Sharing with partners and service providers</h2>
            <p>
              When you redeem a reward from a partner (e.g. SL, Tradera, Plick or any of our other
              partners), only the information required for you to receive the offer is shared, such as a
              discount code or confirmation that the conditions are met.
            </p>
            <p>
              We use these services to run the app: Supabase (database and storage within the EU), Open
              Food Facts (product information from barcodes, no personal data), OCR.space (text
              recognition of receipt images when the phone cannot do it itself), Sightengine (automatic
              review of profile photos for inappropriate content) and Apple (Sign in with Apple).
            </p>
          </section>

          <section>
            <h2>5. Cookies on klimava.se</h2>
            <p>
              The klimava.se website does not currently use third-party tracking or analytics cookies. If
              that changes, this policy will be updated.
            </p>
          </section>

          <section>
            <h2>6. Your rights</h2>
            <p>
              Under GDPR you have the right to access, correct, delete or export your personal data.
              Contact us at <a href="mailto:klimavauf@gmail.com">klimavauf@gmail.com</a> to exercise your
              rights. You also have the right to file a complaint with the Swedish Authority for Privacy
              Protection (IMY).
            </p>
          </section>

          <section>
            <h2>7. Contact</h2>
            <p>
              Privacy questions: <a href="mailto:klimavauf@gmail.com">klimavauf@gmail.com</a>
              <br />
              In-app support: <a href="mailto:support@klimava.com">support@klimava.com</a>
            </p>
          </section>
        </>
      )}
    </LegalLayout>
  );
};

export default Privacy;
