import React, { useState, useRef, useEffect } from 'react';
import { 
  FaLinkedin, FaTwitter, FaInstagram, FaFacebook, 
  FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt,
  FaUser, FaBriefcase, FaBuilding, FaMoon, FaSun,
  FaCopy, FaImage, FaDownload
} from 'react-icons/fa';
import defaultLogo from './assets/Logo.png';

const legalDisclaimer = `Aviso legal: Este mensaje y sus archivos adjuntos están dirigidos exclusivamente a su destinatario y pueden contener información confidencial. Si usted no es el destinatario indicado, queda notificado de que la utilización, divulgación y/o copia sin autorización está prohibida en virtud de la legislación vigente. Si ha recibido este correo por error, por favor notifíquelo inmediatamente al remitente y elimine el mensaje de su sistema.`;

const SignatureTemplate1 = ({ name, jobTitle, companyName, companyAddress, postalCode, phoneNumber, email, website, linkedin, twitter, instagram, facebook, companyLogo }) => (
  <div className="signature-preview template1">
    {companyLogo && <img src={companyLogo} alt="Company Logo" />}
    <h2>{name}</h2>
    <p className="job-title">{jobTitle}</p>
    {companyName && <p><strong>{companyName}</strong></p>}
    {companyAddress && <p>{companyAddress}</p>}
    {postalCode && <p>CP: {postalCode}</p>}
    {phoneNumber && <p><FaPhone style={{marginRight: '8px'}} />{phoneNumber}</p>}
    <p>
      {email && <a href={`mailto:${email}`}><FaEnvelope style={{marginRight: '8px'}} />{email}</a>}
      {website && <a href={website} target="_blank" rel="noopener noreferrer"><FaGlobe style={{marginRight: '8px'}} />{website}</a>}
    </p>
    <div className="social-icons">
      {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
      {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
      {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
      {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
    </div>
    <div className="legal-disclaimer">
      {legalDisclaimer}
    </div>
  </div>
);

const SignatureTemplate2 = ({ name, jobTitle, companyName, companyAddress, postalCode, phoneNumber, email, website, linkedin, twitter, instagram, facebook, companyLogo }) => (
  <div className="signature-preview template2">
    <div className="logo-container">
      {companyLogo && <img src={companyLogo} alt="Company Logo" />}
    </div>
    <div className="text-container">
      <h2>{name}</h2>
      <p>{jobTitle}</p>
      {companyName && <p><strong>{companyName}</strong></p>}
      <div className="contact-info">
        {companyAddress && <p><FaMapMarkerAlt />{companyAddress}</p>}
        {postalCode && <p><FaMapMarkerAlt />CP: {postalCode}</p>}
        {phoneNumber && <p><FaPhone />{phoneNumber}</p>}
        {email && <p><FaEnvelope />{email}</p>}
        {website && <p><FaGlobe />{website}</p>}
        {linkedin && <p><FaLinkedin /><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}
        {twitter && <p><FaTwitter /><a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a></p>}
        {instagram && <p><FaInstagram /><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>}
        {facebook && <p><FaFacebook /><a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>}
      </div>
    </div>
    <div className="legal-disclaimer">
      {legalDisclaimer}
    </div>
  </div>
);

const SignatureTemplate3 = ({ name, jobTitle, companyName, companyAddress, postalCode, phoneNumber, email, website, linkedin, twitter, instagram, facebook, companyLogo }) => (
  <div className="signature-preview template3">
    {companyLogo && <img src={companyLogo} alt="Company Logo" />}
    <h2>{name}</h2>
    <p className="job-title">{jobTitle}</p>
    {companyName && <p><strong>{companyName}</strong></p>}
    <div>
      {companyAddress && <p><FaMapMarkerAlt style={{marginRight: '8px'}} />{companyAddress}</p>}
      {postalCode && <p><FaMapMarkerAlt style={{marginRight: '8px'}} />CP: {postalCode}</p>}
      {phoneNumber && <p><FaPhone style={{marginRight: '8px'}} />{phoneNumber}</p>}
      {email && <p><a href={`mailto:${email}`}><FaEnvelope style={{marginRight: '8px'}} />{email}</a></p>}
      {website && <p><a href={website} target="_blank" rel="noopener noreferrer"><FaGlobe style={{marginRight: '8px'}} />{website}</a></p>}
    </div>
    <div className="social-icons">
      {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
      {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
      {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
      {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
    </div>
    <div className="legal-disclaimer">
      {legalDisclaimer}
    </div>
  </div>
);

const SignatureTemplate4 = ({ name, jobTitle, companyName, companyAddress, postalCode, phoneNumber, email, website, linkedin, twitter, instagram, facebook, companyLogo }) => (
  <div className="signature-preview template4">
    <div className="logo-frame">
      {companyLogo && <img src={companyLogo} alt="Company Logo" />}
    </div>
    <h2>{name}</h2>
    <p className="job-title">{jobTitle}</p>
    {companyName && <p><strong>{companyName}</strong></p>}
    <div className="contact-container">
      {companyAddress && <span className="contact-item"><FaMapMarkerAlt />{companyAddress}</span>}
      {postalCode && <span className="contact-item"><FaMapMarkerAlt />CP: {postalCode}</span>}
      {phoneNumber && <span className="contact-item"><FaPhone />{phoneNumber}</span>}
      {email && <span className="contact-item"><FaEnvelope /><a href={`mailto:${email}`}>{email}</a></span>}
      {website && <span className="contact-item"><FaGlobe /><a href={website} target="_blank" rel="noopener noreferrer">{website}</a></span>}
    </div>
    <div className="social-icons">
      {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
      {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
      {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
      {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
    </div>
    <div className="legal-disclaimer">
      {legalDisclaimer}
    </div>
  </div>
);

const SignatureTemplate5 = ({ name, jobTitle, companyName, companyAddress, postalCode, phoneNumber, email, website, linkedin, twitter, instagram, facebook, companyLogo }) => (
  <div className="signature-preview template5">
    <div className="header-container">
      {companyLogo && <img src={companyLogo} alt="Company Logo" />}
      <div className="name-container">
        <h2>{name}</h2>
        <p className="job-title">{jobTitle}</p>
        {companyName && <p className="company-name"><strong>{companyName}</strong></p>}
      </div>
    </div>
    <div className="content-container">
      <div className="contact-info">
        {companyAddress && <span className="contact-item"><FaMapMarkerAlt />{companyAddress}</span>}
        {postalCode && <span className="contact-item"><FaMapMarkerAlt />CP: {postalCode}</span>}
        {phoneNumber && <span className="contact-item"><FaPhone />{phoneNumber}</span>}
        {email && <span className="contact-item"><FaEnvelope /><a href={`mailto:${email}`}>{email}</a></span>}
        {website && <span className="contact-item"><FaGlobe /><a href={website} target="_blank" rel="noopener noreferrer">{website}</a></span>}
      </div>
      <div className="social-icons">
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
        {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
        {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
      </div>
    </div>
    <div className="legal-disclaimer">{legalDisclaimer}</div>
  </div>
);

const SignatureTemplate6 = ({ name, jobTitle, companyName, companyAddress, postalCode, phoneNumber, email, website, linkedin, twitter, instagram, facebook, companyLogo }) => (
  <div className="signature-preview template6">
    <div className="main-content">
      <div className="info-section">
        <h2>{name}</h2>
        <p className="job-title">{jobTitle}</p>
        {companyName && <p className="company-name"><strong>{companyName}</strong></p>}
        <div className="contact-details">
          {companyAddress && <p><FaMapMarkerAlt />{companyAddress}</p>}
          {postalCode && <p><FaMapMarkerAlt />CP: {postalCode}</p>}
          {phoneNumber && <p><FaPhone />{phoneNumber}</p>}
          {email && <p><FaEnvelope /><a href={`mailto:${email}`}>{email}</a></p>}
          {website && <p><FaGlobe /><a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>}
        </div>
      </div>
      {companyLogo && <div className="logo-section">
        <img src={companyLogo} alt="Company Logo" />
        <div className="social-icons">
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
          {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
          {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
          {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>}
        </div>
      </div>}
    </div>
    <div className="legal-disclaimer">{legalDisclaimer}</div>
  </div>
);

function App() {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const signatureRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const loadExampleData = () => {
    setName('Carlos Sánchez Barbado');
    setJobTitle('CEO');
    setEmail('contacto@sientelared.com');
    setWebsite('sientelared.com');
    setLinkedin('https://www.linkedin.com/company/siente-la-red/');
    setTwitter('https://twitter.com/sientelared');
    setInstagram('https://www.instagram.com/sientelared/');
    setFacebook('https://www.facebook.com/sientelared/');
    fetch(defaultLogo)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setCompanyLogo(reader.result);
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => console.error('Error al cargar el logo:', error));
    setCompanyName('Siente La Red');
    setCompanyAddress('C/ Ramon y Cajal 9 Bis 1B Villajoyosa - Alicante');
    setPostalCode('03570');
    setPhoneNumber('690121523');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        if (base64String.startsWith('data:image/')) {
          setCompanyLogo(base64String);
        } else {
          console.error('El archivo seleccionado no es una imagen válida');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  const copySignature = () => {
    const range = document.createRange();
    range.selectNode(signatureRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  };

  const copyContactInfo = async () => {
    const socialLinks = `
      ${linkedin ? `<a href="${linkedin}" style="color: #007bff; text-decoration: none; margin-right: 10px;"><FaLinkedin style="margin-right: 5px;" />LinkedIn</a>` : ''}
      ${twitter ? `<a href="${twitter}" style="color: #007bff; text-decoration: none; margin-right: 10px;"><FaTwitter style="margin-right: 5px;" />Twitter</a>` : ''}
      ${instagram ? `<a href="${instagram}" style="color: #007bff; text-decoration: none; margin-right: 10px;"><FaInstagram style="margin-right: 5px;" />Instagram</a>` : ''}
      ${facebook ? `<a href="${facebook}" style="color: #007bff; text-decoration: none; margin-right: 10px;"><FaFacebook style="margin-right: 5px;" />Facebook</a>` : ''}
    `;

    const contactInfo = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        ${companyLogo ? `<img src="${companyLogo}" alt="Company Logo" style="max-width: 150px; margin-bottom: 15px;">` : ''}
        <div style="margin-bottom: 10px;">
          <strong style="font-size: 16px;">${name}</strong>
          <br>
          <span style="color: #666;">${jobTitle}</span>
        </div>
        ${companyName ? `<div style="margin-bottom: 10px;"><strong>${companyName}</strong></div>` : ''}
        ${companyAddress ? `<div style="margin-bottom: 10px;">${companyAddress}</div>` : ''}
        ${postalCode ? `<div style="margin-bottom: 5px;"><FaMapMarkerAlt style="margin-right: 5px;" />CP: ${postalCode}</div>` : ''}
        ${phoneNumber ? `<div style="margin-bottom: 5px;"><FaPhone style="margin-right: 5px;" />${phoneNumber}</div>` : ''}
        ${email ? `<div style="margin-bottom: 5px;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;"><FaEnvelope style="margin-right: 5px;" />${email}</a></div>` : ''}
        ${website ? `<div style="margin-bottom: 10px;"><a href="${website}" style="color: #007bff; text-decoration: none;"><FaGlobe style="margin-right: 5px;" />${website}</a></div>` : ''}
        <div style="margin-top: 10px;">
          ${socialLinks}
        </div>
      </div>
    `;

    try {
      await navigator.clipboard.writeText(contactInfo.trim());
      alert('¡Información de contacto copiada al portapapeles!');
    } catch (err) {
      console.error('Error al copiar la información de contacto: ', err);
      alert('Error al copiar la información de contacto.');
    }
  };

  const renderSignature = () => {
    const props = {
      name,
      jobTitle,
      companyName,
      companyAddress,
      postalCode,
      phoneNumber,
      email,
      website,
      linkedin,
      twitter,
      instagram,
      facebook,
      companyLogo,
    };

    switch (selectedTemplate) {
      case 'template1':
        return <SignatureTemplate1 {...props} />;
      case 'template2':
        return <SignatureTemplate2 {...props} />;
      case 'template3':
        return <SignatureTemplate3 {...props} />;
      case 'template4':
        return <SignatureTemplate4 {...props} />;
      case 'template5':
        return <SignatureTemplate5 {...props} />;
      case 'template6':
        return <SignatureTemplate6 {...props} />;
      default:
        return null;
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const downloadSignatureHTML = async () => {
    const signature = signatureRef.current;
    
    // Procesar el logo a base64
    const processLogo = async () => {
      if (companyLogo) {
        try {
          const response = await fetch(companyLogo);
          const blob = await response.blob();
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
        } catch (error) {
          console.error('Error al procesar el logo:', error);
          return companyLogo;
        }
      }
      return '';
    };

    const logoBase64 = await processLogo();

    // Reemplazar la URL del logo en el HTML actual
    const signatureHtml = signature.innerHTML.replace(companyLogo, logoBase64);

    // Extraer los estilos computados
    const computedStyles = window.getComputedStyle(signature);
    const signatureStyles = `
      /* Estilos base */
      .signature-preview {
        font-family: Arial, sans-serif;
        background-color: transparent !important;
        color: #333333;
        padding: 20px;
        max-width: 600px;
        margin: 0;
        line-height: 1.6;
      }
      .signature-preview img {
        max-width: 150px;
        height: auto;
        display: block;
        margin-bottom: 15px;
        border: 0;
      }
      .signature-preview h2 {
        font-size: 18px;
        margin: 0 0 5px 0;
        color: #007bff;
        font-weight: bold;
      }
      .signature-preview p {
        margin: 4px 0;
        font-size: 14px;
        color: #333333;
      }
      .signature-preview a {
        color: #007bff;
        text-decoration: none;
      }
      .signature-preview .social-icons {
        margin-top: 15px;
      }
      .signature-preview .social-icons a {
        display: inline-block;
        margin-right: 10px;
        color: #007bff;
      }
      .legal-disclaimer {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid #dee2e6;
        font-size: 11px;
        color: #666666;
        line-height: 1.4;
        font-style: italic;
      }

      /* Plantilla Elegante (5) */
      .signature-preview.template5 {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 20px;
      }
      .signature-preview.template5 .header-container {
        display: table;
        width: 100%;
        margin-bottom: 15px;
      }
      .signature-preview.template5 .header-container > * {
        display: table-cell;
        vertical-align: middle;
      }
      .signature-preview.template5 img {
        width: 120px;
        padding-right: 20px;
      }
      .signature-preview.template5 .name-container {
        padding-left: 20px;
      }
      .signature-preview.template5 .contact-info {
        margin-top: 15px;
      }
      .signature-preview.template5 .contact-item {
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 8px;
      }
      .signature-preview.template5 .social-icons {
        border-top: 1px solid #e0e0e0;
        padding-top: 15px;
        margin-top: 15px;
      }

      /* Plantilla Profesional (6) */
      .signature-preview.template6 {
        border: none;
        padding: 20px;
      }
      .signature-preview.template6 .main-content {
        display: table;
        width: 100%;
      }
      .signature-preview.template6 .info-section {
        display: table-cell;
        vertical-align: top;
        padding-right: 20px;
      }
      .signature-preview.template6 .logo-section {
        display: table-cell;
        vertical-align: top;
        width: 150px;
      }
      .signature-preview.template6 .contact-details p {
        margin: 4px 0;
      }
      .signature-preview.template6 .social-icons {
        margin-top: 10px;
      }
      .signature-preview.template6 .social-icons a {
        display: inline-block;
        margin-right: 10px;
      }

      /* Ajustes para compatibilidad con clientes de correo */
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      td {
        padding: 0;
        vertical-align: top;
      }
      img {
        -ms-interpolation-mode: bicubic;
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      p {
        margin: 4px 0;
      }
    `;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Firma de Email</title>
          <style type="text/css">
            ${signatureStyles}
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: transparent;">
          <!--[if mso]>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td>
          <![endif]-->
          ${signatureHtml}
          <!--[if mso]>
              </td>
            </tr>
          </table>
          <![endif]-->
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'firma-email.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearAllFields = () => {
    setName('');
    setJobTitle('');
    setEmail('');
    setWebsite('');
    setLinkedin('');
    setTwitter('');
    setInstagram('');
    setFacebook('');
    setCompanyLogo('');
    setCompanyName('');
    setCompanyAddress('');
    setPostalCode('');
    setPhoneNumber('');
  };

  return (
    <div>
      <header className="app-header">
        <div className="header-content">
          <img src={defaultLogo} alt="Siente La Red Logo" className="header-logo" />
          <h1>Generador de Firma de Email</h1>
        </div>
      </header>

      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <div className="example-button-container">
        <div className="button-group">
          <button 
            className="button" 
            onClick={loadExampleData}
            title="Carga información de ejemplo para ver cómo funciona la aplicación"
          >
            <FaDownload /> Cargar Información de Ejemplo
          </button>
          <button 
            className="button secondary" 
            onClick={clearAllFields}
            title="Limpia todos los campos del formulario"
          >
            🗑️ Vaciar Campos
          </button>
        </div>
      </div>
      
      <div className="input-container">
        <div className="input-group">
          <label><FaUser /> Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaBriefcase /> Cargo:</label>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaEnvelope /> Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaGlobe /> Sitio Web:</label>
          <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaLinkedin /> LinkedIn:</label>
          <input type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaTwitter /> Twitter:</label>
          <input type="url" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaInstagram /> Instagram:</label>
          <input type="url" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaFacebook /> Facebook:</label>
          <input type="url" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaImage /> Logo de la Empresa:</label>
          <input type="file" accept="image/*" onChange={handleLogoChange} />
        </div>
        
        <div className="input-group">
          <label><FaBuilding /> Nombre de la Empresa:</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaMapMarkerAlt /> Dirección de la Empresa:</label>
          <textarea value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaMapMarkerAlt /> Código Postal:</label>
          <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>
        
        <div className="input-group">
          <label><FaPhone /> Teléfono:</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
      </div>

      <div className="button-container">
        <button 
          className={`button ${selectedTemplate === 'template1' ? 'active' : ''}`}
          onClick={() => handleTemplateChange('template1')}
        >
          Moderna
        </button>
        <button 
          className={`button ${selectedTemplate === 'template2' ? 'active' : ''}`}
          onClick={() => handleTemplateChange('template2')}
        >
          Corporativa
        </button>
        <button 
          className={`button ${selectedTemplate === 'template3' ? 'active' : ''}`}
          onClick={() => handleTemplateChange('template3')}
        >
          Minimalista
        </button>
        <button 
          className={`button ${selectedTemplate === 'template4' ? 'active' : ''}`}
          onClick={() => handleTemplateChange('template4')}
        >
          Creativa
        </button>
        <button 
          className={`button ${selectedTemplate === 'template5' ? 'active' : ''}`}
          onClick={() => handleTemplateChange('template5')}
        >
          Elegante
        </button>
        <button 
          className={`button ${selectedTemplate === 'template6' ? 'active' : ''}`}
          onClick={() => handleTemplateChange('template6')}
        >
          Profesional
        </button>
      </div>

      <div ref={signatureRef}>
        {renderSignature()}
      </div>

      <div className="button-container">
        <div className="button-group">
          <h3>Copiar al Portapapeles</h3>
          <button className="button" onClick={copySignature} title="Copia la firma exactamente como se ve, incluyendo el formato">
            <FaCopy /> Copiar Firma Completa
          </button>
          <button className="button" onClick={copyContactInfo} title="Copia solo la información de contacto en formato texto plano">
            <FaCopy /> Copiar Solo Texto
          </button>
        </div>

        <div className="button-group">
          <h3>Descargar</h3>
          <button className="button primary" onClick={downloadSignatureHTML} title="Descarga un archivo HTML con la firma y todos los estilos">
            <FaDownload /> Descargar Firma HTML
          </button>
        </div>
      </div>

      <footer className="app-footer">
        <div className="footer-content">
          <img src={defaultLogo} alt="Siente La Red Logo" className="footer-logo" />
          <p>
            Desarrollado con ❤️ por <a href="https://sientelared.com" target="_blank" rel="noopener noreferrer">
              Siente La Red
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
