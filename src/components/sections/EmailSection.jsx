import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { useLanguage } from "../../context/LanguageContext";

const EmailSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const { tr } = useLanguage();
  const c = tr('contact');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, email, message].includes('')) { setError(true); return; }
    setError(false); setLoading(true);
    emailjs.sendForm('service_qhv6noc', 'template_ukfi4rb', form.current, 'CvKAhNJaQkagHQlHn')
      .then(() => {
        setName(''); setEmail(''); setMessage(''); setLoading(false);
        toast.success(c.success, { position: "top-right", autoClose: 5000, theme: "dark" });
      })
      .catch(() => {
        setLoading(false);
        toast.error(c.error, { position: "top-right", autoClose: 5000, theme: "dark" });
      });
  };

  const CONTACT_INFO = [
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: c.labels?.email, value: "devlahoya@gmail.com", href: "mailto:devlahoya@gmail.com" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: c.labels?.whatsapp, value: "+52 (618) 234-35-29", href: "https://wa.me/526182343529" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: c.labels?.location, value: "Durango, Mexico", href: null },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label: c.labels?.linkedin, value: "linkedin.com/in/devlahoya", href: "https://www.linkedin.com/in/devlahoya/" },
  ];

  return (
    <Section id="contact">
      <Header>
        <SectionTag>{c.tag}</SectionTag>
        <SectionTitle>{c.title}</SectionTitle>
        <SectionSub>{c.subtitle}</SectionSub>
      </Header>
      <Content>
        <InfoColumn>
          {CONTACT_INFO.map((item, i) => (
            item.href ? (
              <InfoLink key={i} href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer">
                <InfoIcon>{item.icon}</InfoIcon>
                <InfoText><InfoLabel>{item.label}</InfoLabel><InfoValue>{item.value}</InfoValue></InfoText>
              </InfoLink>
            ) : (
              <InfoCard key={i}>
                <InfoIcon>{item.icon}</InfoIcon>
                <InfoText><InfoLabel>{item.label}</InfoLabel><InfoValue>{item.value}</InfoValue></InfoText>
              </InfoCard>
            )
          ))}
        </InfoColumn>
        <FormColumn>
          <Form ref={form} onSubmit={handleSubmit}>
            {error && <ErrorMsg>{c.required}</ErrorMsg>}
            <FormRow>
              <FormGroup><Label>{c.name}</Label><Input type="text" name="from_name" placeholder={c.namePh} value={name} onChange={(e) => setName(e.target.value)} /></FormGroup>
              <FormGroup><Label>{c.email}</Label><Input type="email" name="user_email" placeholder={c.emailPh} value={email} onChange={(e) => setEmail(e.target.value)} /></FormGroup>
            </FormRow>
            <FormGroup><Label>{c.message}</Label><Textarea name="message" placeholder={c.messagePh} rows={6} value={message} onChange={(e) => setMessage(e.target.value)} /></FormGroup>
            <SubmitBtn type="submit" disabled={loading}>
              {loading ? c.sending : <>{c.send} <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>}
            </SubmitBtn>
          </Form>
        </FormColumn>
      </Content>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </Section>
  );
};

export default EmailSection;

const Section = styled.section`
  width: 100%; background-color: #10101a; padding: 6rem 0 7rem; position: relative;
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,212,255,0.25), transparent); }
`;
const Header = styled.div`width: 88%; max-width: 1200px; margin: 0 auto 4rem; display: flex; flex-direction: column; gap: 0.75rem;`;
const SectionTag = styled.span`font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff;`;
const SectionTitle = styled.h2`font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; color: #e2e8f0; line-height: 1.2;`;
const SectionSub = styled.p`font-size: 0.95rem; color: rgba(226,232,240,0.45); font-family: 'Inter', sans-serif; max-width: 500px;`;
const Content = styled.div`
  width: 88%; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 2fr; gap: 3rem;
  @media (max-width: 64em) { grid-template-columns: 1fr; }
`;
const InfoColumn = styled.div`display: flex; flex-direction: column; gap: 1rem;`;
const cardBase = `
  display: flex; align-items: center; gap: 1rem; padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px;
`;
const InfoCard = styled.div`${cardBase}`;
const InfoLink = styled.a`
  ${cardBase} transition: all 0.2s ease;
  &:hover { border-color: rgba(0,212,255,0.25); background: rgba(0,212,255,0.05); }
`;
const InfoIcon = styled.div`
  width: 40px; height: 40px; border-radius: 10px; background: rgba(0,212,255,0.1);
  border: 1px solid rgba(0,212,255,0.2); display: flex; align-items: center; justify-content: center; color: #00d4ff; flex-shrink: 0;
`;
const InfoText = styled.div`display: flex; flex-direction: column; gap: 2px;`;
const InfoLabel = styled.span`font-size: 0.72rem; font-weight: 600; color: rgba(226,232,240,0.4); letter-spacing: 0.06em; text-transform: uppercase;`;
const InfoValue = styled.span`font-size: 0.88rem; color: #e2e8f0; font-weight: 500;`;
const FormColumn = styled.div``;
const Form = styled.form`display: flex; flex-direction: column; gap: 1.25rem;`;
const FormRow = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;
  @media (max-width: 40em) { grid-template-columns: 1fr; }
`;
const FormGroup = styled.div`display: flex; flex-direction: column; gap: 0.5rem;`;
const Label = styled.label`font-size: 0.82rem; font-weight: 600; color: rgba(226,232,240,0.6);`;
const inputBase = `
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 10px;
  padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Inter', sans-serif; color: #e2e8f0; width: 100%; outline: none;
  transition: border-color 0.2s ease;
  &::placeholder { color: rgba(226,232,240,0.25); }
  &:focus { border-color: rgba(0,212,255,0.4); background: rgba(0,212,255,0.03); }
`;
const Input = styled.input`${inputBase}`;
const Textarea = styled.textarea`${inputBase} resize: vertical; min-height: 120px;`;
const ErrorMsg = styled.p`font-size: 0.82rem; color: #f87171; padding: 0.6rem 1rem; background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.2); border-radius: 8px;`;
const SubmitBtn = styled.button`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 0.85rem 2rem;
  background: linear-gradient(135deg, #00d4ff, #7c3aed); color: #fff; font-size: 0.92rem; font-weight: 600;
  border: none; border-radius: 10px; cursor: pointer; transition: all 0.25s ease; align-self: flex-start;
  font-family: 'Space Grotesk', sans-serif;
  opacity: ${({ disabled }) => disabled ? 0.7 : 1};
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,212,255,0.25); }
`;
