import { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Dropdowns component smart
 */
const Dropdowns = (props) => {
    const select = useRef();
    const stateDropdowns = [
        {
            name: 'Alabama',
            abbreviation: 'AL',
        },
        {
            name: 'Alaska',
            abbreviation: 'AK',
        },
        {
            name: 'American Samoa',
            abbreviation: 'AS',
        },
        {
            name: 'Arizona',
            abbreviation: 'AZ',
        },
        {
            name: 'Arkansas',
            abbreviation: 'AR',
        },
        {
            name: 'California',
            abbreviation: 'CA',
        },
        {
            name: 'Colorado',
            abbreviation: 'CO',
        },
        {
            name: 'Connecticut',
            abbreviation: 'CT',
        },
        {
            name: 'Delaware',
            abbreviation: 'DE',
        },
        {
            name: 'District Of Columbia',
            abbreviation: 'DC',
        },
        {
            name: 'Federated States Of Micronesia',
            abbreviation: 'FM',
        },
        {
            name: 'Florida',
            abbreviation: 'FL',
        },
        {
            name: 'Georgia',
            abbreviation: 'GA',
        },
        {
            name: 'Guam',
            abbreviation: 'GU',
        },
        {
            name: 'Hawaii',
            abbreviation: 'HI',
        },
        {
            name: 'Idaho',
            abbreviation: 'ID',
        },
        {
            name: 'Illinois',
            abbreviation: 'IL',
        },
        {
            name: 'Indiana',
            abbreviation: 'IN',
        },
        {
            name: 'Iowa',
            abbreviation: 'IA',
        },
        {
            name: 'Kansas',
            abbreviation: 'KS',
        },
        {
            name: 'Kentucky',
            abbreviation: 'KY',
        },
        {
            name: 'Louisiana',
            abbreviation: 'LA',
        },
        {
            name: 'Maine',
            abbreviation: 'ME',
        },
        {
            name: 'Marshall Islands',
            abbreviation: 'MH',
        },
        {
            name: 'Maryland',
            abbreviation: 'MD',
        },
        {
            name: 'Massachusetts',
            abbreviation: 'MA',
        },
        {
            name: 'Michigan',
            abbreviation: 'MI',
        },
        {
            name: 'Minnesota',
            abbreviation: 'MN',
        },
        {
            name: 'Mississippi',
            abbreviation: 'MS',
        },
        {
            name: 'Missouri',
            abbreviation: 'MO',
        },
        {
            name: 'Montana',
            abbreviation: 'MT',
        },
        {
            name: 'Nebraska',
            abbreviation: 'NE',
        },
        {
            name: 'Nevada',
            abbreviation: 'NV',
        },
        {
            name: 'New Hampshire',
            abbreviation: 'NH',
        },
        {
            name: 'New Jersey',
            abbreviation: 'NJ',
        },
        {
            name: 'New Mexico',
            abbreviation: 'NM',
        },
        {
            name: 'New York',
            abbreviation: 'NY',
        },
        {
            name: 'North Carolina',
            abbreviation: 'NC',
        },
        {
            name: 'North Dakota',
            abbreviation: 'ND',
        },
        {
            name: 'Northern Mariana Islands',
            abbreviation: 'MP',
        },
        {
            name: 'Ohio',
            abbreviation: 'OH',
        },
        {
            name: 'Oklahoma',
            abbreviation: 'OK',
        },
        {
            name: 'Oregon',
            abbreviation: 'OR',
        },
        {
            name: 'Palau',
            abbreviation: 'PW',
        },
        {
            name: 'Pennsylvania',
            abbreviation: 'PA',
        },
        {
            name: 'Puerto Rico',
            abbreviation: 'PR',
        },
        {
            name: 'Rhode Island',
            abbreviation: 'RI',
        },
        {
            name: 'South Carolina',
            abbreviation: 'SC',
        },
        {
            name: 'South Dakota',
            abbreviation: 'SD',
        },
        {
            name: 'Tennessee',
            abbreviation: 'TN',
        },
        {
            name: 'Texas',
            abbreviation: 'TX',
        },
        {
            name: 'Utah',
            abbreviation: 'UT',
        },
        {
            name: 'Vermont',
            abbreviation: 'VT',
        },
        {
            name: 'Virgin Islands',
            abbreviation: 'VI',
        },
        {
            name: 'Virginia',
            abbreviation: 'VA',
        },
        {
            name: 'Washington',
            abbreviation: 'WA',
        },
        {
            name: 'West Virginia',
            abbreviation: 'WV',
        },
        {
            name: 'Wisconsin',
            abbreviation: 'WI',
        },
        {
            name: 'Wyoming',
            abbreviation: 'WY',
        },
    ];

    const arrayDepartment = [
        'Sales',
        'Marketing',
        'Engineering',
        'Human Resources',
        'Legal',
    ];

    /**
     * America states list table
     */
    const VerifSelect = () => {
        switch (props.control) {
            case 'state':
                if (select.current.value.length === 2) {
                    select.current.style.border = '2px solid green';
                    props.setValid(true);
                    props.setValue(select.current.value);
                } else {
                    select.current.style.border = '2px solid red';
                    props.setValid(false);
                    props.setValue('');
                }
                break;
            case 'department':
                const valueExist = arrayDepartment.indexOf(select.current.value);
                if (valueExist !== -1) {
                    select.current.style.border = '2px solid green';
                    props.setValid(true);
                    props.setValue(select.current.value);
                } else {
                    select.current.style.border = '2px solid red';
                    props.setValid(false);
                    props.setValue('');
                }
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} ref={select} onChange={VerifSelect} required>
                {props.control === 'state' ? (
                    stateDropdowns.map((state, key) => (
                        <option key={key} value={state.abbreviation}>
                            {state.name}
                        </option>
                    ))) : (
                    arrayDepartment.map((department, key) => (
                        <option key={key} value={department}>
                            {department}
                        </option>
                    )))}
            </select>
        </div>
    );
};

Dropdowns.propTypes = {
    control: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    setValid: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default Dropdowns;
