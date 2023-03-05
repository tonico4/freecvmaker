import React, { useState } from 'react';

const Generator = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [education, setEducation] = useState([{school: '', graduationYear: ''}]);
    const [workExperience, setWorkExperience] = useState([{company: '', position: '', description: '', startDate: '', endDate: ''}]);
    const [history, setHistory] = useState('');
    const [titles, setTitles] = useState('');
    const [skills, setSkills] = useState('');
    const [languages, setLanguages] = useState('');
    const [aptitudes, setAptitudes] = useState('');

    // Education
    const handleAddEducation = () => {
        setEducation([
            ...education,
            {
                school: '',
                graduationYear: ''
            }
        ]);
    };

    const handleEducationChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEducation = [...education];
        updatedEducation[index][name] = value;
        setEducation(updatedEducation);
    };

    const handleRemoveEducation = (index) => {
        const updatedEducation = [...education];
        updatedEducation.splice(index, 1);
        setEducation(updatedEducation);
    };

    // Work Experience
    const handleAddWorkExperience = () => {
        setWorkExperience([
            ...workExperience,
            {
                company: '',
                position: '',
                description: '',
                startDate: '',
                endDate: ''
            }
        ]);
    };

    const handleWorkExperienceChange = (e, index) => {
        const { name, value } = e.target;
        const updatedWorkExperience = [...workExperience];
        updatedWorkExperience[index][name] = value;
        setWorkExperience(updatedWorkExperience);
    };

    const handleRemoveWorkExperience = (index) => {
        const updatedWorkExperience = [...workExperience];
        updatedWorkExperience.splice(index, 1);
        setWorkExperience(updatedWorkExperience);
    };

    return (
        <div>
            <h1>Create your CV:</h1>
            <form>
                <h2>Educación</h2>
                {education.map((edu, index) => (
                    <div key={index}>
                        <label>Escuela:</label>
                        <input type="text" name="school" value={edu.school} onChange={(e) => handleEducationChange(e, index)}></input>
                        <label>Año de graduación:</label>
                        <input type="text" name="graduationYear" value={edu.graduationYear} onChange={(e) => handleEducationChange(e, index)}></input>
                        {index > 0 && <button type="button" onClick={() => handleRemoveEducation(index)}>Borrar</button>}
                    </div>
                ))}
                <button type="button" onClick={() => handleAddEducation}>Añadir</button>
                <h2>Experiencia laboral</h2>
                {workExperience.map((work, index) => (
                    <div key={index}>
                        <label>Empresa:</label>
                        <input type="text" name="company" value={work.company} onChange={(e) => handleWorkExperienceChange(e, index)}></input>
                        <label>Cargo:</label>
                        <input type="text" name="position" value={work.position} onChange={(e) => handleWorkExperienceChange(e, index)}></input>
                        <label>Descripción:</label>
                        <input type="text" name="description" value={work.description} onChange={(e) => handleWorkExperienceChange(e, index)}></input>
                        <label>Año de inicio:</label>
                        <input type="text" name="startDate" value={work.startDate} onChange={(e) => handleWorkExperienceChange(e, index)}></input>
                        <label>Año de fin:</label>
                        <input type="text" name="endDate" value={work.endDate} onChange={(e) => handleWorkExperienceChange(e, index)}></input>
                        {index > 0 && <button type="button" onClick={() => handleRemoveWorkExperience(index)}>Borrar</button>}
                    </div>
                ))}
                <button type="button" onClick={() => handleAddWorkExperience}>Añadir</button>
            </form>
        </div>
    );
}

export default Generator;
