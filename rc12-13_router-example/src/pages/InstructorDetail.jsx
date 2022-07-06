import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const InstructorDetail = () => {
  const { id } = useParams();
  const [inst, setInst] = useState([]);
  const navigate = useNavigate()

  const getInstructor = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructor();
  }, [id]);

  return (
    <div className="container text-center">
      <h3>{inst.name}</h3>
      <img
        className="w-50"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>
      <div>
        <button className='btn btn-success' onClick={() => navigate('/')} >HOME</button>
        <button className='btn btn-warning' onClick={() => navigate(-1)} >GO BACK</button>
      </div>
    </div>
  );
};

export default InstructorDetail;