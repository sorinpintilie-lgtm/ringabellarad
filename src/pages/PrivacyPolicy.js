import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <section
        className="section hero-section"
        style={{
          paddingTop: '7rem',
          paddingBottom: '3rem',
          background: 'linear-gradient(135deg, #ffecd2 0%, #e0f7fa 100%)'
        }}
      >
        <div className="container text-center">
          <div
            style={{
              background: 'white',
              borderRadius: 'var(--radius-xl)',
              padding: '1.75rem 2rem',
              boxShadow: 'var(--shadow-lg)',
              display: 'inline-block',
              maxWidth: '900px'
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                color: 'var(--primary-blue)',
                marginBottom: '1rem'
              }}
            >
              Politica de Confidențialitate
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--gray-600)',
                margin: 0
              }}
            >
              Informații despre modul în care sunt colectate, utilizate și protejate datele
              cu caracter personal transmise prin site-ul Ringabell.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div
            className="privacy-card"
            style={{
              background: '#fff',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            <div
              style={{
                display: 'grid',
                gap: '2rem',
                color: 'var(--gray-700)',
                lineHeight: '1.8'
              }}
            >
              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>1. Cine suntem</h2>
                <p>
                  Această Politică de Confidențialitate explică modul în care prelucrăm datele
                  cu caracter personal colectate prin intermediul site-ului <strong>ringabell.ro</strong>.
                </p>
                <p>Operatorul datelor cu caracter personal este:</p>
                <p>
                  <strong>VISUALSKY SRL</strong><br />
                  Sediu: Mun. Reșița, str. Victoriei nr. 6<br />
                  Nr. înregistrare: ROONRC.J2021000091111<br />
                  CUI: RO43734132<br />
                  E-mail: contact@sky.ro<br />
                  Telefon: 0720 088 880
                </p>
                <p>
                  Pentru întrebări privind prelucrarea datelor cu caracter personal, ne poți
                  contacta la: <strong>contact@sky.ro</strong>.
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  2. Ce date cu caracter personal colectăm
                </h2>

                <h3 style={{ marginBottom: '0.75rem' }}>a) Date transmise prin formularul de contact</h3>
                <p>Atunci când completezi formularul de contact de pe site, putem prelucra:</p>
                <ul>
                  <li>nume și prenume</li>
                  <li>adresă de e-mail</li>
                  <li>număr de telefon</li>
                  <li>vârsta copilului</li>
                  <li>serviciul de interes</li>
                  <li>conținutul mesajului transmis</li>
                  <li>orice alte informații pe care alegi să ni le comunici în mesaj</li>
                </ul>

                <h3 style={{ marginBottom: '0.75rem', marginTop: '1rem' }}>b) Date tehnice colectate automat</h3>
                <p>La accesarea site-ului, este posibil să colectăm automat anumite informații tehnice, precum:</p>
                <ul>
                  <li>adresa IP</li>
                  <li>tipul browserului</li>
                  <li>sistemul de operare</li>
                  <li>data și ora accesării</li>
                  <li>paginile vizitate pe site</li>
                  <li>alte date tehnice necesare funcționării, securității și administrării site-ului</li>
                </ul>

                <h3 style={{ marginBottom: '0.75rem', marginTop: '1rem' }}>
                  c) Date colectate prin cookie-uri și tehnologii similare
                </h3>
                <p>
                  Site-ul poate utiliza cookie-uri sau tehnologii similare pentru funcționare,
                  analiză și îmbunătățirea experienței de utilizare.
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  3. Scopurile în care prelucrăm datele
                </h2>
                <ul>
                  <li>pentru a răspunde solicitărilor transmise prin formularul de contact</li>
                  <li>pentru a comunica în legătură cu serviciile educaționale oferite</li>
                  <li>pentru programarea unei discuții, prezentări sau vizite, la cererea ta</li>
                  <li>pentru administrarea și securizarea site-ului</li>
                  <li>pentru îmbunătățirea funcționării și conținutului site-ului</li>
                  <li>pentru îndeplinirea obligațiilor legale care ne revin</li>
                  <li>pentru apărarea drepturilor și intereselor noastre legitime, atunci când este cazul</li>
                </ul>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  4. Temeiurile legale ale prelucrării
                </h2>
                <p>Prelucrăm datele tale cu caracter personal în baza unuia sau mai multora dintre următoarele temeiuri:</p>
                <ul>
                  <li>consimțământul tău, atunci când acesta este solicitat</li>
                  <li>demersuri la cererea persoanei vizate înainte de încheierea unui contract</li>
                  <li>executarea unui contract, dacă ajungem într-o relație contractuală</li>
                  <li>îndeplinirea unei obligații legale</li>
                  <li>
                    interesul legitim al operatorului, cum ar fi asigurarea securității site-ului,
                    gestionarea solicitărilor sau apărarea drepturilor noastre
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  5. Cât timp păstrăm datele
                </h2>
                <p>
                  Păstrăm datele cu caracter personal doar atât timp cât este necesar pentru
                  îndeplinirea scopurilor pentru care au fost colectate, precum și ulterior,
                  dacă există obligații legale de arhivare, evidență sau apărare a drepturilor noastre.
                </p>
                <p>În mod orientativ:</p>
                <ul>
                  <li>
                    datele transmise prin formularul de contact pot fi păstrate pe perioada necesară
                    gestionării solicitării și pentru o perioadă rezonabilă ulterior
                  </li>
                  <li>
                    datele aferente unei relații contractuale sau precontractuale pot fi păstrate pe
                    durata relației și ulterior, conform obligațiilor legale aplicabile
                  </li>
                  <li>
                    datele tehnice pot fi păstrate pe perioade limitate, potrivit necesității
                    operaționale și de securitate
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  6. Cui putem divulga datele
                </h2>
                <p>Nu vindem datele tale cu caracter personal.</p>
                <p>Datele pot fi transmise, în măsura în care este necesar, către:</p>
                <ul>
                  <li>furnizori de servicii IT, hosting, mentenanță website sau suport tehnic</li>
                  <li>furnizori de servicii de comunicare și transmitere formulare</li>
                  <li>furnizori de analiză și securitate web</li>
                  <li>autorități publice, instituții sau organe competente, dacă legea ne obligă</li>
                  <li>
                    consultanți, avocați sau alți parteneri contractuali, atunci când acest lucru este
                    necesar pentru exercitarea drepturilor sau îndeplinirea obligațiilor noastre
                  </li>
                </ul>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  7. Transferuri de date în afara Spațiului Economic European
                </h2>
                <p>
                  În principiu, urmărim să limităm prelucrarea datelor la furnizori aflați în Uniunea
                  Europeană / Spațiul Economic European.
                </p>
                <p>
                  Dacă, în anumite situații, folosim furnizori care implică transferuri de date în afara
                  Spațiului Economic European, aceste transferuri vor fi realizate numai cu respectarea
                  cerințelor legale și pe baza unor garanții adecvate.
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>8. Drepturile tale</h2>
                <p>Beneficiezi de următoarele drepturi:</p>
                <ul>
                  <li>dreptul la informare</li>
                  <li>dreptul de acces la date</li>
                  <li>dreptul la rectificare</li>
                  <li>dreptul la ștergerea datelor</li>
                  <li>dreptul la restricționarea prelucrării</li>
                  <li>dreptul la portabilitatea datelor</li>
                  <li>dreptul la opoziție</li>
                  <li>dreptul de a-ți retrage consimțământul, atunci când prelucrarea se bazează pe consimțământ</li>
                  <li>dreptul de a depune o plângere la autoritatea competentă</li>
                </ul>
                <p>
                  Pentru exercitarea acestor drepturi, ne poți scrie la: <strong>contact@sky.ro</strong>.
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  9. Dreptul de a depune plângere
                </h2>
                <p>
                  Dacă apreciezi că prelucrarea datelor tale încalcă legislația aplicabilă, ai dreptul
                  de a depune o plângere la autoritatea competentă din România:
                </p>
                <p>
                  <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  10. Securitatea datelor
                </h2>
                <p>
                  Luăm măsuri tehnice și organizatorice adecvate pentru a proteja datele cu caracter
                  personal împotriva accesului neautorizat, pierderii, distrugerii, divulgării sau
                  modificării accidentale ori ilegale.
                </p>
                <p>
                  Cu toate acestea, niciun sistem informatic și nicio transmisie prin internet nu poate
                  garanta securitate absolută.
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>11. Datele minorilor</h2>
                <p>
                  Site-ul poate face referire la servicii dedicate copiilor, însă comunicarea prin
                  formular este destinată părinților, tutorilor legali sau altor reprezentanți legali.
                </p>
                <p>
                  Te rugăm să nu ne transmiți prin formular date personale excesive sau informații
                  sensibile care nu sunt necesare pentru soluționarea solicitării tale.
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>12. Cookie-uri</h2>
                <p>Site-ul poate utiliza cookie-uri și tehnologii similare pentru:</p>
                <ul>
                  <li>funcționarea corectă a site-ului</li>
                  <li>măsurarea traficului și a performanței</li>
                  <li>îmbunătățirea experienței utilizatorilor</li>
                </ul>
                <p>
                  Detaliile privind categoriile de cookie-uri utilizate, durata de stocare și modul în
                  care îți poți gestiona preferințele pot fi prezentate într-o Politică de Cookie-uri separată.
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  13. Linkuri către alte site-uri
                </h2>
                <p>
                  Site-ul poate conține linkuri către site-uri ale unor terți. Nu controlăm și nu răspundem
                  pentru conținutul, politica de confidențialitate sau practicile acestor site-uri.
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  14. Modificări ale politicii
                </h2>
                <p>
                  Ne rezervăm dreptul de a actualiza periodic această Politică de Confidențialitate,
                  pentru a reflecta modificări legislative, tehnice sau operaționale.
                </p>
                <p>
                  Orice actualizare va fi publicată pe această pagină, iar versiunea actualizată va intra
                  în vigoare de la data publicării.
                </p>
                <p>
                  <strong>Ultima actualizare:</strong> 25.03.2026
                </p>
              </section>

              <section>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>15. Contact</h2>
                <p>
                  Pentru orice întrebări legate de această Politică de Confidențialitate sau de modul în
                  care prelucrăm datele tale, ne poți contacta la:
                </p>
                <p>
                  <strong>VISUALSKY SRL</strong><br />
                  Mun. Reșița, str. Victoriei nr. 6<br />
                  contact@sky.ro<br />
                  0720 088 880
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
