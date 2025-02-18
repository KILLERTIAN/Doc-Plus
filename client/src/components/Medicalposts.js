import React from 'react';

const Medicalposts = () => {
  const articles = [
    {
      id: 1,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      category: 'Medical',
      date: 'March 31, 2022',
      title: '6 Tips To Protect Your Mental Health When You\'re Sick',
      author: 'Rebecca Lee',
      image: '/api/placeholder/400/300'
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
                    src="/api/placeholder/32/32" 
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