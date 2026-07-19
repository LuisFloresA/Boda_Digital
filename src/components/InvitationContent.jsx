import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Gift, HeartHandshake } from 'lucide-react';
import './InvitationContent.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function InvitationContent() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set wedding date
    const targetDate = new Date("November 15, 2026 16:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="invitation-container fade-in">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: "url('/hero-bg.png')" }}></div>
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content glass-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="pre-title">CON LA BENDICIÓN DE NUESTROS PADRES</p>
          <h1 className="script-text names">Isabella & Santiago</h1>
          <p className="post-title">Tenemos el honor de invitarles a nuestra boda</p>
          
          <div className="date-block">
            <span className="day">SÁBADO</span>
            <span className="date">15</span>
            <span className="month-year">NOVIEMBRE 2026</span>
          </div>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <motion.section 
        className="countdown-section text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="section-title">Ya Falta Poco</h2>
        <div className="countdown-grid">
          <div className="time-box">
            <div className="number">{timeLeft.days}</div>
            <div className="label">Días</div>
          </div>
          <div className="time-box">
            <div className="number">{timeLeft.hours}</div>
            <div className="label">Horas</div>
          </div>
          <div className="time-box">
            <div className="number">{timeLeft.minutes}</div>
            <div className="label">Minutos</div>
          </div>
          <div className="time-box">
            <div className="number">{timeLeft.seconds}</div>
            <div className="label">Segundos</div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <motion.h2 
          className="section-title text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Itinerario
        </motion.h2>

        <div className="timeline-container">
          <motion.div className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="timeline-icon"><HeartHandshake size={24} /></div>
            <div className="timeline-content glass-panel">
              <h3 className="event-name">Ceremonia Religiosa</h3>
              <p className="event-time"><Clock size={16}/> 16:00 hrs</p>
              <p className="event-location"><MapPin size={16}/> Parroquia de San Miguel Arcángel</p>
              <button className="btn-outline">Ver Mapa</button>
            </div>
          </motion.div>

          <motion.div className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="timeline-icon"><Gift size={24} /></div>
            <div className="timeline-content glass-panel">
              <h3 className="event-name">Recepción y Cóctel</h3>
              <p className="event-time"><Clock size={16}/> 18:00 hrs</p>
              <p className="event-location"><MapPin size={16}/> Hacienda Los Olivos</p>
            </div>
          </motion.div>

          <motion.div className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="timeline-icon"><Calendar size={24} /></div>
            <div className="timeline-content glass-panel">
              <h3 className="event-name">Cena y Fiesta</h3>
              <p className="event-time"><Clock size={16}/> 20:00 hrs</p>
              <p className="event-location">El mejor momento de la noche para celebrar nuestro amor.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dress Code & Gifts */}
      <section className="info-section grid-2">
        <motion.div className="info-card glass-panel text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="section-title">Código de Vestimenta</h2>
          <div className="dress-code-visual">
            <p className="dress-code-type">Formal / Etiqueta</p>
            <p className="dress-code-desc">Para nosotras: Vestido Largo.<br/>Para nosotros: Traje Formal.</p>
            <p className="dress-code-note">Nos encantaría verlos en tonos tierra, pero el blanco está reservado para la novia.</p>
          </div>
        </motion.div>

        <motion.div className="info-card glass-panel text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="section-title">Mesa de Regalos</h2>
          <p className="gift-text">El mejor regalo es tu presencia. Sin embargo, si deseas tener un detalle con nosotros para nuestra luna de miel:</p>
          <div className="bank-info">
            <p><strong>Banco:</strong> Banamex</p>
            <p><strong>Cuenta:</strong> 1234 5678 9101 1121</p>
            <p><strong>CLABE:</strong> 002123456789101112</p>
          </div>
        </motion.div>
      </section>

      {/* RSVP Section */}
      <motion.section 
        className="rsvp-section text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="rsvp-content glass-panel">
          <h2 className="section-title">Confirma tu Asistencia</h2>
          <p>Nos llena de emoción compartir este día contigo.</p>
          <p className="rsvp-deadline">Por favor confirma antes del 1 de Noviembre.</p>
          
          <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Tu Nombre Completo" className="rsvp-input" />
            <select className="rsvp-input">
              <option value="">¿Asistirás?</option>
              <option value="yes">¡Sí, ahí estaré!</option>
              <option value="no">Lamentablemente no podré asistir</option>
            </select>
            <input type="number" placeholder="Número de personas" min="1" max="5" className="rsvp-input" />
            <button className="btn-rsvp">Enviar Confirmación</button>
          </form>
        </div>
      </motion.section>

    </div>
  );
}
