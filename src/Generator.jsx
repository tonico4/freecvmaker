import React, { useState } from 'react';

const Generator = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [education, setEducation] = useState([]);
    const [workExperience, setWorkExperience] = useState([]);
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

            </form>
        </div>
    );
}

export default Generator;
