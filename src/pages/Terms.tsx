import { LegalLayout } from "@/components/LegalLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { t, language } = useLanguage();

  return (
    <LegalLayout
      eyebrow={t("Juridik", "Legal")}
      title={t("Användarvillkor", "Terms of Service")}
      updated={language === "sv" ? "6 augusti 2026" : "August 6, 2026"}
    >
      {language === "sv" ? (
        <>
          <section>
            <h2>1. Om tjänsten</h2>
            <p>
              Klimava är en gratis livsstilsapp som ger poäng för klimatsmarta val – till exempel
              återvinning, kollektivtrafik, hållbara köp och second hand. Poäng kan lösas in mot
              belöningar hos våra samarbetspartners. Genom att använda appen godkänner du de här
              villkoren.
            </p>
          </section>

          <section>
            <h2>2. Ditt konto</h2>
            <p>
              Du ansvarar för att uppgifterna i ditt konto är korrekta och för att hålla din inloggning
              säker. Poäng och belöningar är personliga och kan inte överlåtas eller lösas in för
              kontanter.
            </p>
          </section>

          <section>
            <h2>3. Rätt användning</h2>
            <ul>
              <li>Ladda inte upp kvitton eller registrera aktiviteter som inte är dina egna eller genuina.</li>
              <li>Försök inte manipulera poängsystemet, topplistor eller utmaningar.</li>
              <li>Missbruk kan leda till att poäng dras tillbaka eller att kontot stängs av.</li>
            </ul>
          </section>

          <section>
            <h2>4. Poäng och belöningar</h2>
            <p>
              Poäng ges enligt de kriterier som gäller vid tillfället för registreringen och kan komma att
              ändras när nya funktioner eller partners läggs till. Belöningar tillhandahålls av respektive
              samarbetspartner, och deras egna villkor gäller för själva erbjudandet (t.ex. rabattkoder
              eller fri frakt).
            </p>
          </section>

          <section>
            <h2>5. Ändringar</h2>
            <p>
              Vi utvecklar Klimava kontinuerligt och kan komma att ändra funktioner, poängkriterier eller
              de här villkoren. Väsentliga ändringar meddelas i appen eller på klimava.se.
            </p>
          </section>

          <section>
            <h2>6. Ansvarsbegränsning</h2>
            <p>
              Klimava tillhandahålls i befintligt skick. Vi strävar efter hög tillgänglighet men kan inte
              garantera att appen alltid är felfri eller tillgänglig, eller att en specifik belöning
              alltid finns kvar hos en partner.
            </p>
          </section>

          <section>
            <h2>7. Kontakt</h2>
            <p>
              Frågor om villkoren: <a href="mailto:klimavauf@gmail.com">klimavauf@gmail.com</a>
              <br />
              Support i appen: <a href="mailto:support@klimava.com">support@klimava.com</a>
            </p>
          </section>
        </>
      ) : (
        <>
          <section>
            <h2>1. About the service</h2>
            <p>
              Klimava is a free lifestyle app that awards points for climate-smart choices – such as
              recycling, public transport, sustainable purchases and second-hand shopping. Points can be
              redeemed for rewards from our partners. By using the app you agree to these terms.
            </p>
          </section>

          <section>
            <h2>2. Your account</h2>
            <p>
              You're responsible for keeping your account details accurate and your login secure. Points
              and rewards are personal and cannot be transferred or redeemed for cash.
            </p>
          </section>

          <section>
            <h2>3. Fair use</h2>
            <ul>
              <li>Don't upload receipts or register activities that aren't your own or genuine.</li>
              <li>Don't attempt to manipulate the points system, leaderboards or challenges.</li>
              <li>Misuse may result in points being reversed or the account being suspended.</li>
            </ul>
          </section>

          <section>
            <h2>4. Points and rewards</h2>
            <p>
              Points are awarded according to the criteria in effect at the time of registration and may
              change as new features or partners are added. Rewards are provided by the respective
              partner, and their own terms apply to the offer itself (e.g. discount codes or free
              shipping).
            </p>
          </section>

          <section>
            <h2>5. Changes</h2>
            <p>
              We continuously develop Klimava and may change features, points criteria or these terms.
              Material changes will be announced in the app or on klimava.se.
            </p>
          </section>

          <section>
            <h2>6. Limitation of liability</h2>
            <p>
              Klimava is provided as-is. We aim for high availability but can't guarantee the app is
              always error-free or available, or that a specific reward will always remain available from
              a partner.
            </p>
          </section>

          <section>
            <h2>7. Contact</h2>
            <p>
              Questions about these terms: <a href="mailto:klimavauf@gmail.com">klimavauf@gmail.com</a>
              <br />
              In-app support: <a href="mailto:support@klimava.com">support@klimava.com</a>
            </p>
          </section>
        </>
      )}
    </LegalLayout>
  );
};

export default Terms;
