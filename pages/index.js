import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const divisions = [
    { slug: 'family-office', title: '🏢 Multi-Family Office', desc: 'Wealth structuring, succession planning, and offshore advisory.' },
    { slug: 'asset-management', title: '💼 Asset Management', desc: 'Diversified portfolios across real estate, crypto, equities, and startups.' },
    { slug: 'kc-realtors', title: '🏘 KC Realtors', desc: 'Property acquisitions and tokenized real estate listings.' },
    { slug: 'haji-builders', title: '🏗 KC Haji Builders', desc: 'Development projects – past, ongoing, and upcoming.' },
    { slug: 'crypto-tribe', title: '🌐 Crypto Tribe LLP', desc: 'Merchant crypto services, smart contract lab, and Web3 tokenization.' },
    { slug: 'assetwise', title: '🧱 AssetWise', desc: 'Fractional property investments and tokenization platform.' },
    { slug: 'shahana-foundation', title: '🕊 Shahana Foundation', desc: 'CSR in tribute to Shanu – education, empowerment, and environment.' },
    { slug: 'vision-2030', title: '🪙 Vision 2030 Tokens', desc: 'Roadmap for real estate, crypto, and equity-backed tokens.' }
  ];

  return (
    <>
      <Head>
        <title>KC Capitals – Digital HQ</title>
      </Head>

      {/* Hero Section */}
      <section style={{background:'#1D3557',color:'white',padding:'80px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:'2.5rem',marginBottom:'20px'}}>KC Capitals – Building Legacy & Wealth</h1>
        <p style={{fontSize:'1.2rem',maxWidth:'700px',margin:'0 auto'}}>
          The official digital headquarters of KC Capitals, a UAE-based holding company with deep roots in India and a strong presence in Saudi Arabia.
        </p>
      </section>

      {/* Divisions */}
      <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px',padding:'40px'}}>
        {divisions.map((d,i) => (
          <Link key={i} href={`/${d.slug}`} style={{textDecoration:'none'}}>
            <div style={{background:'white',padding:'20px',borderRadius:'12px',boxShadow:'0 4px 8px rgba(0,0,0,0.1)',cursor:'pointer'}}>
              <h2 style={{color:'#EFB810',marginBottom:'10px'}}>{d.title}</h2>
              <p style={{color:'#333'}}>{d.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      <footer style={{background:'#1D3557',color:'white',textAlign:'center',padding:'20px'}}>
        <p>© 2025 KC Capitals | Digital HQ – UAE • India • KSA</p>
      </footer>
    </>
  );
}
