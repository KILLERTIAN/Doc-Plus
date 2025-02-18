import React from 'react';

const Medicalposts = () => {
  const articles = [
    {
      id: 1,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
      image: 'https://res.cloudinary.com/djoebsejh/image/upload/v1713628513/drdzhoxruwfyfiob37h5.jpg'
    },
    {
      id: 2,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
      image: 'https://res.cloudinary.com/djoebsejh/image/upload/v1713628487/ssctjzy2zn6xhtkbtg2t.jpg'
    },
    {
      id: 3,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
      image: 'https://res.cloudinary.com/djoebsejh/image/upload/v1713629731/xdfxxcgfr7udippr2slu.jpg'
    }
  ];

  return (
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '48px 16px'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <p style={{
          color: '#3B82F6',
          marginBottom: '8px'
        }}>Blog & News</p>
        <h2 style={{
          fontSize: '2.25rem',
          fontWeight: 'bold',
          color: '#1E3A8A'
        }}>Read Our Latest News</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        width: '100%'
      }}>
        {articles.map((article) => (
          <div key={article.id} style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '100%'
          }}>
            <div style={{
              position: 'relative',
              height: '192px'
            }}>
              <img 
                src={article.image} 
                alt="Detox concept"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{
              padding: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px'
              }}>
                <span style={{ color: '#4B5563' }}>{article.category}</span>
                <span style={{ color: '#9CA3AF' }}>|</span>
                <span style={{ color: '#4B5563' }}>{article.date}</span>
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1E3A8A',
                marginBottom: '16px'
              }}>
                {article.title}
              </h3>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: '#E5E7EB'
                }}>
                  <img 
                    src="https://s3-alpha-sig.figma.com/img/f2b1/95b8/8432b7bc2559a85010e594f78aacfc8c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nfcXoDdvvlPVCONiA4WrS5kiVX-~jJeo5C~d0lLF~qA2pERq6n3a0yagKbYmC2RbA-AGL~oGZHJ6qrkVBxqtHX1LLYlTWjH2YkHrJG2-Sg7gQfu-UQ~SdB1tYvze8TIwXYSMlbbSp0TXefztj3PQ3~ZPAcCHZB0m9Nzh1uWNS7UYb5BawZqMmUkEuHPCi0g0vefZmqLy9aQB3jpFKgUHUrz7a1fAZWPp~iTjrfSJ8ugThyH8SQ2ELwKPpM~Q-CwDp~3iT45RXX~ujqRYlxBJz8cLi0XkOStqN09JS0hu31Qe-IC7AwxffqYG5RPsDbZtznNpXaiXIP0~GqPcGadV1A__" 
                    alt={article.author}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <span style={{
                  color: '#1E3A8A',
                  fontWeight: '500'
                }}>{article.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicalposts;