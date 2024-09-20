import { useNavigate } from 'react-router-dom';

const Card = ({ fact }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/fact/${fact.id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      style={{
        backgroundColor: fact.color,
        fontFamily: fact.font,
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
        border: '2px solid #155724',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      className="card"
    >
      <h3 style={{ color: '#155724' }}>{fact.title}</h3>
      <p style={{ color: '#155724' }}>{fact.info}</p>
    </div>
  );
};

export default Card;

