import React, { useState, useEffect } from 'react';

const DummyAlumni = [
  { company: 'Deloitte', designation: 'Solution Delivery Analyst' },
  { company: 'HCL Software', designation: 'Product Manager' },
  { company: 'Oracle', designation: 'Software Development Engineer' },
  { company: 'PwC', designation: 'Tech Consultant' },
  { company: 'Cisco', designation: 'Big Data Analytics Engineer' },
  { company: 'IBM', designation: 'Software Development Engineer' },
  { company: 'SAP Labs', designation: 'Software Development Engineer' },
  { company: 'PwC', designation: 'Associate consultant' },
  { company: 'Epsilon', designation: 'Software Development Engineer' },
  { company: 'Schneider Electric', designation: 'Full Stack Developer' },
  { company: 'Cloudera', designation: 'Software Development Engineer' },
  { company: 'Schneider Electric', designation: 'Full Stack developer' },
  { company: 'Mercedes Benz Research and Development', designation: 'Data Engineer' },
  { company: 'PwC', designation: 'Associate' },
  { company: 'Paypal', designation: 'Target Corporation' },
  { company: 'Allo Health', designation: 'Software Development Engineer' },
  { company: 'GSK', designation: 'Software Development Engineer' },
  { company: 'Autodesk', designation: 'Software Development Engineer' },
  { company: 'Target', designation: 'Software Development Engineer' },
  { company: 'KPMG India', designation: 'Data Analyst' },
  { company: 'Arcesium', designation: 'Software Development Engineer' },
  { company: 'Games 24x7', designation: 'Software Development Engineer' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Data Scientist' },
  { company: 'Change Jar Technologies', designation: 'Software Development Engineer' },
  { company: 'LAM Research', designation: 'IT Engineer' },
  { company: 'Hewlett-Packard Enterprise', designation: 'Software Dvelopment Engineer' },
  { company: 'Consillio', designation: 'Software Dvelopment Engineer' },
  { company: 'Blue Yonder', designation: 'Software Dvelopment Engineer' },
  { company: 'Indian Navy', designation: 'Sub Lieutenant' },
  { company: 'IIT Kanpur', designation: 'PhD' },
  { company: 'Zebra Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'Commvault', designation: 'Software Dvelopment Engineer' },
  { company: 'Tejas Networks', designation: 'Software Dvelopment Engineer' },
  { company: 'Akamai Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'Zebra Technologies', designation: 'Software Dvelopment Engineer' },
  { company: 'CGI', designation: 'Software Dvelopment Engineer' },
  { company: 'Hewlett Packard Enterprise', designation: 'Cloud Dveloper' },
  { company: 'TruckX', designation: 'Senior Software Dvelopment Engineer' },
  { company: 'IBM', designation: 'Software Dvelopment Engineer' },
  { company: 'Universal automation solutions private limited', designation: 'Software Dvelopment Engineer' },
];

const Body = () => {
  const [company, setCompany] = useState('');
  const [searchType, setSearchType] = useState('learn');
  const [message, setMessage] = useState('');
  const [foundAlumni, setFoundAlumni] = useState([]);
  const [redirectLink, setRedirectLink] = useState('');

  useEffect(() => {
    if (redirectLink) {
      window.location.href = redirectLink;
    }
  }, [redirectLink])

  const handleSearch = () => {
    const foundAlumni = DummyAlumni.filter(alumnus => alumnus.company.toLowerCase() === company.toLowerCase());

    
    if (foundAlumni.length > 0) {
      // Determine the link based on the selected radio button
      const links = {
        learn: 'https://chatpeslinkedform.vercel.app/',
        prepare: 'https://connectpesform.vercel.app/',
      };

      setRedirectLink(links[searchType] || '');  // Set the appropriate link
      setMessage('');
    } else {
      setRedirectLink('');
      setMessage('No Alumni found in the organization you searched for!');
    }
  };

  const uniqueCompanies = [...new Set(DummyAlumni.map(alumnus => alumnus.company))];

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <section style={styles.searchSection}>
          <h1 style={styles.heading}>Student Search</h1>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="learn"
                checked={searchType === 'learn'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>You are looking forward to applying for the organization but you require a few details about how it is going to be like to work there</span>
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="prepare"
                checked={searchType === 'prepare'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>You have received an interview call and want tips on how to go about it</span>
            </label>
          </div>
          <input
            type="text"
            list="companySuggestions"
            placeholder="Search by Organization Name...."
            style={styles.input}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <datalist id="companySuggestions">
            {uniqueCompanies.map((company, index) => (
              <option key={index} value={company} />
            ))}
          </datalist>
          <button style={styles.button} onClick={handleSearch}>Search</button>
          {message && <p style={styles.message}>{message}</p>}
          <div style={styles.contentRow}>
            {foundAlumni.length > 0 && (
              foundAlumni.map((alumnus, index) => (
                <div key={index} style={styles.textContainer}>
                  <p><strong>Company:</strong> {alumnus.company}</p>
                  <p><strong>Designation:</strong> {alumnus.designation}</p>
                </div>
              ))
            )}
          </div>
        </section>
        <section style={styles.companySection}>
          <h2 style={styles.companyHeading}>Organizations our Alumni are a part of:</h2>
          <div style={styles.companyList}>
            {uniqueCompanies.map((company, index) => (
              <div key={index} style={styles.companyContainer}>
                <strong>{company}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'LightCyan',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    width: '100%', // Full width of the container
    textAlign: 'center',
    fontFamily: 'Coneria',
    boxSizing: 'border-box', // Ensure padding is included in the width
    transition: 'transform 0.3s ease-in-out',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333', // Dark text color for better contrast
    fontFamily: 'Coneria',
    animation: 'fadeIn 1s ease-in-out',
  },
  input: {
    marginBottom: '20px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    width: '100%',
    fontSize: '16px',
    fontFamily: 'Coneria',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    fontFamily: 'Coneria',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
  message: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#d9534f',
    fontFamily: 'Coneria',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
    fontSize: '16px',
    width: '100%',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'Coneria',
  },
  radioInput: {
    marginRight: '10px',
    accentColor: '#007BFF',
    fontFamily: 'Coneria',
  },
  radioText: {
    fontSize: '16px',
    fontFamily: 'Coneria',
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    width: '100%',
  },
  textContainer: {
    flex: '1 1 60%',
    margin: '0 20px',
    fontSize: '16px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    minHeight: '200px', // Ensure there's enough height
    overflow: 'visible', // Ensure content isn't clipped
    fontFamily: 'Coneria',
    animation: 'fadeIn 1s ease-in-out',
  },
  h2:{
    fontFamily:'Coneria',
  },
  companySection: {
    marginTop: '40px',
    width: '100%',
    textAlign: 'center',
  },
  companyHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Coneria',
    animation: 'fadeIn 1s ease-in-out',
  },
  companyList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    color: 'blue',

  },
  companyContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'Coneria',
    transition: 'transform 0.3s ease',
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Body;
