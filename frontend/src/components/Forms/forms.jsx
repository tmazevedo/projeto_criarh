import FormControl from '@material-ui/core/FormControl';
import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase';
import { Redirect } from "react-router-dom";

export default function Forms() {

    const [state, setState] = React.useState(false);


    const setRedirect = () => {
        setState(true);

    }
    const renderRedirect = () => {
        if (state) {
            return <Redirect to='/dashboard' />
        }
    }

    //Purpose
    const [PurposeQuestion1, setValue1] = React.useState('');

    const [PurposeQuestion2, setValue2] = React.useState('');

    const [PurposeQuestion3, setValue3] = React.useState('');

    const handleChangePurpose1 = (event) => {
        setValue1(event.target.value);
    };
    const handleChangePurpose2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChangePurpose3 = (event) => {
        setValue3(event.target.value);
    };
    //End Purpose

    //Process

    const [ProcessQuestion1, setValueProcess1] = React.useState('');

    const [ProcessQuestion2, setValueProcess2] = React.useState('');

    const [ProcessQuestion3, setValueProcess3] = React.useState('');

    const [ProcessQuestion4, setValueProcess4] = React.useState('');

    const [ProcessQuestion5, setValueProcess5] = React.useState('');

    const [ProcessQuestion6, setValueProcess6] = React.useState('');

    const [ProcessQuestion7, setValueProcess7] = React.useState('');

    const [ProcessQuestion8, setValueProcess8] = React.useState('');

    const [ProcessQuestion9, setValueProcess9] = React.useState('');

    const [ProcessQuestion10, setValueProcess10] = React.useState('');

    const [ProcessQuestion11, setValueProcess11] = React.useState('');

    const [ProcessQuestion12, setValueProcess12] = React.useState('');

    const [ProcessQuestion13, setValueProcess13] = React.useState('');


    const handleChangeProcess1 = (event) => {
        setValueProcess1(event.target.value);
    };

    const handleChangeProcess2 = (event) => {
        setValueProcess2(event.target.value);
    };

    const handleChangeProcess3 = (event) => {
        setValueProcess3(event.target.value);
    };

    const handleChangeProcess4 = (event) => {
        setValueProcess4(event.target.value);
    };

    const handleChangeProcess5 = (event) => {
        setValueProcess5(event.target.value);
    };

    const handleChangeProcess6 = (event) => {
        setValueProcess6(event.target.value);
    };

    const handleChangeProcess7 = (event) => {
        setValueProcess7(event.target.value);
    };

    const handleChangeProcess8 = (event) => {
        setValueProcess8(event.target.value);
    };

    const handleChangeProcess9 = (event) => {
        setValueProcess9(event.target.value);
    };

    const handleChangeProcess10 = (event) => {
        setValueProcess10(event.target.value);
    };

    const handleChangeProcess11 = (event) => {
        setValueProcess11(event.target.value);
    };

    const handleChangeProcess12 = (event) => {
        setValueProcess12(event.target.value);
    };

    const handleChangeProcess13 = (event) => {
        setValueProcess13(event.target.value);
    };

    //End Process

    //Space

    const [SpaceQuestion1, setValueSpace1] = React.useState('');

    const [SpaceQuestion2, setValueSpace2] = React.useState('');

    const [SpaceQuestion3, setValueSpace3] = React.useState('');


    const handleChangeSpace1 = (event) => {
        setValueSpace1(event.target.value);
    };

    const handleChangeSpace2 = (event) => {
        setValueSpace2(event.target.value);
    };

    const handleChangeSpace3 = (event) => {
        setValueSpace3(event.target.value);
    };
    //End Space

    //Information

    const [InformationQuestion1, setValueInformation1] = React.useState('');

    const [InformationQuestion2, setValueInformation2] = React.useState('');


    const handleChangeInformation1 = (event) => {
        setValueInformation1(event.target.value);
    };

    const handleChangeInformation2 = (event) => {
        setValueInformation2(event.target.value);
    };

    //Demographics

    const [DemographicsQuestion1, setValueDemographics1] = React.useState('');

    const [DemographicsQuestion2, setValueDemographics2] = React.useState('');

    const [DemographicsQuestion3, setValueDemographics3] = React.useState('');

    const [DemographicsQuestion4, setValueDemographics4] = React.useState('');

    const [DemographicsQuestion5, setValueDemographics5] = React.useState('');


    const handleChangeDemographics1 = (event) => {
        setValueDemographics1(event.target.value);
    };

    const handleChangeDemographics2 = (event) => {
        setValueDemographics2(event.target.value);
    };

    const handleChangeDemographics3 = (event) => {
        setValueDemographics3(event.target.value);
    };


    const handleChangeDemographics4 = (event) => {
        setValueDemographics4(event.target.value);
    };

    const handleChangeDemographics5 = (event) => {
        setValueDemographics5(event.target.value);
    };

    const saveOnDatabese = () => {
        firebase.database().ref('criarh').push({
            purpose: [PurposeQuestion1, PurposeQuestion2, PurposeQuestion3],
            process: [ProcessQuestion1, ProcessQuestion2, ProcessQuestion3, ProcessQuestion4, ProcessQuestion5, ProcessQuestion6, ProcessQuestion7, ProcessQuestion8, ProcessQuestion9, ProcessQuestion10, ProcessQuestion11, ProcessQuestion12, ProcessQuestion13],
            space: [SpaceQuestion1, SpaceQuestion2, SpaceQuestion3],
            information: [InformationQuestion1, InformationQuestion2],
            demographics: [DemographicsQuestion1, DemographicsQuestion2, DemographicsQuestion3, DemographicsQuestion4]
        });
        setRedirect();
    }

    // End Demographics
    return (
        <div style={{ overflow: "hidden" ,marginLeft: "21%",marginTop: "3%" ,position:"absolute"}}>
            {renderRedirect()}
            <FormControl component="fieldset">
                <FormLabel component="legend">Qual o seu nivel de Escolaridade</FormLabel>
                <br />
                <RadioGroup value={DemographicsQuestion1} onChange={handleChangeDemographics1}>
                    <FormControlLabel value="SuperiorComp" control={<Radio />} label="Superior Completo" />
                    <FormControlLabel value="SuperiorIncomp" control={<Radio />} label="Superior Incompleto" />
                    <FormControlLabel value="MedioComp" control={<Radio />} label="Ensino Médio Completo" />
                    <FormControlLabel value="MedioIncomp" control={<Radio />} label="Ensino Médio Incompleto" />
                    <FormControlLabel value="FundamentalComp" control={<Radio />} label="Ensino Fundamental Completo" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">A quanto tempo trabalha na empresa?</FormLabel>
                <br />
                <RadioGroup value={DemographicsQuestion2} onChange={handleChangeDemographics2}>
                    <FormControlLabel value="20Plus" control={<Radio />} label="20 Mais" />
                    <FormControlLabel value="10to20" control={<Radio />} label="10 - 20" />
                    <FormControlLabel value="5to10" control={<Radio />} label="5 - 10" />
                    <FormControlLabel value="1to5" control={<Radio />} label="1 - 5" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Idade?</FormLabel>
                <br />
                <TextField value={DemographicsQuestion3} onChange={handleChangeDemographics3} />
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Gênero</FormLabel>
                <br />
                <RadioGroup value={DemographicsQuestion4} onChange={handleChangeDemographics4}>
                    <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                    <FormControlLabel value="others" control={<Radio />} label="Outros" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Por quanto tempo você deseja continuar trabalhando nessa empresa?</FormLabel>
                <br />
                <TextField value={DemographicsQuestion5} onChange={handleChangeDemographics5} />
            </FormControl>
            <br />
            <br />

            <div style={{ textAlign: "center" }}><b>Propósito</b></div>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Quando trabalho em grupo, geralmente utilizamos o propósito da empresa para tomar decisões?</FormLabel>
                <br />
                <RadioGroup value={PurposeQuestion1} onChange={handleChangePurpose1}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">A liderança claramente articula o propósito da empresa, que vai além do lucro?</FormLabel>
                <br />
                <RadioGroup value={PurposeQuestion2} onChange={handleChangePurpose2}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend"> O propósito da empresa é claro para todos os colabores na empresa?</FormLabel>
                <br />
                <RadioGroup value={PurposeQuestion3} onChange={handleChangePurpose3}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <div style={{ textAlign: "center" }}><b>Processo</b></div>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Me sinto desafiado no meu ambiente de trabalho?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion1} onChange={handleChangeProcess1}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Me sinto desafiado no meu ambiente de trabalho?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion2} onChange={handleChangeProcess2}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Normalmente a empresa busca novas ideias com seus colaboradores?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion3} onChange={handleChangeProcess3}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Com rapidez a empresa passa do conceito ao lançamento?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion4} onChange={handleChangeProcess4}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Em geral, a empresa supera problemas rapidamente?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion5} onChange={handleChangeProcess5}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Minha equipe tem liberdade para alterar processos organizacionais?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion6} onChange={handleChangeProcess6}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Minha equipe sente-se confortável desafiando o status quo?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion7} onChange={handleChangeProcess7}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Minha equipe sente-se confortável compartilhando ideias?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion8} onChange={handleChangeProcess8}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">As equipes estão conectadas aos tomadores de decisões finais?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion9} onChange={handleChangeProcess9}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">As equipes estão conectadas aos tomadores de decisões finais?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion10} onChange={handleChangeProcess10}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Existem processos e recursos estabelecidos que fazem as novas ideias avançarem na empresa e todos tem acesso?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion11} onChange={handleChangeProcess11}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Há muitas barreiras para mudar as coisas na organização?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion12} onChange={handleChangeProcess12}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />


            <FormControl component="fieldset">
                <FormLabel component="legend">Os demais departamentos fazem esforços para serem parceiros úteis?</FormLabel>
                <br />
                <RadioGroup value={ProcessQuestion13} onChange={handleChangeProcess13}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <div style={{ textAlign: "center" }}><b>Espaço</b></div>

            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Preciso fazer protótipos (p. ex., criar modelos digitais ou físicos ou esboçar ideias) para fazer meu trabalho?</FormLabel>
                <br />
                <RadioGroup value={SpaceQuestion1} onChange={handleChangeSpace1}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Nosso ambiente de trabalho é bom?</FormLabel>
                <br />
                <RadioGroup value={SpaceQuestion2} onChange={handleChangeSpace2}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Sinto-me energizado pelo espaço físico no qual trabalho?</FormLabel>
                <br />
                <RadioGroup value={SpaceQuestion3} onChange={handleChangeSpace3}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <div style={{ textAlign: "center" }}><b>Informaçōes</b></div>
            <br />
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Os diferentes grupos compartilham informações entre si da forma necessária?</FormLabel>
                <br />
                <RadioGroup value={InformationQuestion1} onChange={handleChangeInformation1}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />

            <FormControl component="fieldset">
                <FormLabel component="legend">Consigo acessar informações de projetos passados com facilidade?</FormLabel>
                <br />
                <RadioGroup value={InformationQuestion2} onChange={handleChangeInformation2}>
                    <FormControlLabel value="1" control={<Radio />} label="Nunca é verdade" />
                    <FormControlLabel value="2" control={<Radio />} label="Na maioria das vezes não é verdade" />
                    <FormControlLabel value="3" control={<Radio />} label="Às vezes é verdade, às vezes não" />
                    <FormControlLabel value="4" control={<Radio />} label="Na maioria das vezes é verdade" />
                    <FormControlLabel value="5" control={<Radio />} label="Sempre é verdade" />
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <Button variant="contained" className="center" color="primary" onClick={saveOnDatabese}>
                Primary
            </Button>
        </div>
    )

}
