const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed.' })
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    const { name, email, phone, childAge, service, message, gdpr } = data;

    if (!name || !email || !message || !gdpr) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Te rugăm să completezi toate câmpurile obligatorii.'
        })
      };
    }

    const html = `
      <h2>Mesaj nou de pe ringabell.ro</h2>
      <p><strong>Nume părinte:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || '-'}</p>
      <p><strong>Vârsta copilului:</strong> ${childAge || '-'}</p>
      <p><strong>Serviciul de interes:</strong> ${service || '-'}</p>
      <p><strong>Acord GDPR:</strong> ${gdpr ? 'Da' : 'Nu'}</p>
      <hr />
      <p><strong>Mesaj:</strong></p>
      <p>${String(message).replace(/\n/g, '<br />')}</p>
    `;

    await sgMail.send({
      to: 'gradinita@ringabell.ro',
      from: process.env.SENDGRID_FROM_EMAIL,
      replyTo: email,
      subject: `Mesaj nou de la ${name} - ringabell.ro`,
      html
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Mesaj trimis cu succes.'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'A apărut o eroare la trimiterea formularului.'
      })
    };
  }
};