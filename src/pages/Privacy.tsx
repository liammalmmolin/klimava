import { LegalLayout } from "@/components/LegalLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t, language } = useLanguage();

  return (
    <LegalLayout
      eyebrow={t("Juridik", "Legal")}
      title={t("Integritetspolicy", "Privacy Policy")}
      updated={language === "sv" ? "6 augusti 2026" : "August 6, 2026"}
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
              <li>Kontouppgifter du själv anger, t.ex. namn och e-post.</li>
              <li>
                Foton av kvitton som du väljer att ladda upp, för att via OCR identifiera produkter och
                avgöra vilka poäng ett köp ger.
              </li>
              <li>
                Platsdata (GPS) när du använder återvinningsscannern, för att bekräfta att du befinner dig
                vid en återvinningsstation.
              </li>
              <li>Aktivitet i appen: samlade poäng, utmaningar, topplistor och inlösta belöningar.</li>
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
              I samband med SL-samarbetet analyseras biljettkvitton direkt på din enhet – ingen bild
              skickas till externa servrar för den delen av flödet. För kvitton från mat- och
              second hand-köp matchas produkter mot vår produktdatabas för att avgöra vilka poäng ett
              köp ger.
            </p>
          </section>

          <section>
            <h2>4. Delning med samarbetspartners</h2>
            <p>
              När du löser in en belöning hos en partner (t.ex. SL, Tradera, Plick eller någon av våra
              övriga partners) delas endast den information som krävs för att du ska kunna ta del av
              erbjudandet, t.ex. en rabattkod eller bekräftelse på att villkoren är uppfyllda.
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
              <li>Account details you provide, such as name and email.</li>
              <li>
                Photos of receipts you choose to upload, used via OCR to identify products and determine
                the points a purchase earns.
              </li>
              <li>
                Location data (GPS) when you use the recycling scanner, to confirm you're at a recycling
                station.
              </li>
              <li>In-app activity: points earned, challenges, leaderboards and redeemed rewards.</li>
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
              As part of the SL partnership, ticket receipts are analyzed directly on your device — no
              image is sent to external servers for that part of the flow. For grocery and second-hand
              receipts, products are matched against our product database to determine the points a
              purchase earns.
            </p>
          </section>

          <section>
            <h2>4. Sharing with partners</h2>
            <p>
              When you redeem a reward from a partner (e.g. SL, Tradera, Plick or any of our other
              partners), only the information required for you to receive the offer is shared, such as a
              discount code or confirmation that the conditions are met.
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
