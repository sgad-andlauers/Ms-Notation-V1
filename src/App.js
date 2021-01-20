import React from "react";
import "./styles.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  }
}));
const INDICE_TROIS_POS = 3;
const INDICE_TROIS_NEG = -3;
const INDICE_UN_POS = 1;
const INDICE_UN_NEG = -1;
export default function App() {
  const classes = useStyles();
  const [checkValue, setCheckValue] = React.useState({
    ssiap: 0,
    epi: 0,
    esi: 0,
    meteo: 0,
    mlci: 0,
    ssi: 0,
    daia: 0,
    dfg: 0,
    dmg: 0,
    zag: 0,
    cs: 0,
    ch: 0,
    sea: 0
  });
  const [surface, setSurface] = React.useState(0);
  const [typeDECI, setTypeDECI] = React.useState(0);
  const getIndiceMSSsiap = () => {
    let indice;
    if (checkValue.ssiap === 1) {
      indice = INDICE_TROIS_POS;
    } else {
      indice = INDICE_TROIS_NEG;
    }
    return indice;
  };
  const getIndiceMSEpi = () => {
    let indice;
    if (checkValue.epi === 1) {
      indice = INDICE_UN_POS;
    } else {
      indice = INDICE_UN_NEG;
    }
    return indice;
  };
  const getIndiceMSEsi = () => {
    let indice;
    if (checkValue.esi === 1) {
      indice = INDICE_TROIS_POS;
    } else {
      indice = INDICE_TROIS_NEG;
    }
    return indice;
  };
  const getIndiceMSMeteo = () => {
    let indice;
    if (checkValue.meteo === 1) {
      indice = INDICE_UN_POS;
    } else {
      indice = INDICE_UN_NEG;
    }
    return indice;
  };
  const getIndiceMSMlci = () => {
    let indice;
    if (checkValue.mlci === 1) {
      indice = INDICE_UN_POS;
    } else {
      indice = INDICE_UN_NEG;
    }
    return indice;
  };
  const getIndiceMSSsi = () => {
    let indice;
    if (checkValue.ssi === 1) {
      indice = INDICE_TROIS_POS;
    } else {
      indice = INDICE_TROIS_NEG;
    }
    return indice;
  };
  const getIndiceMSDai = () => {
    let indice;
    if (checkValue.dai === 1) {
      indice = INDICE_TROIS_POS;
    } else {
      indice = INDICE_TROIS_NEG;
    }
    return indice;
  };
  const getIndiceMSdfg = () => {
    let indice;
    if (checkValue.dfg === 1) {
      indice = INDICE_UN_POS;
    } else {
      indice = INDICE_UN_NEG;
    }
    return indice;
  };
  const getIndiceMSdmg = () => {
    let indice;
    if (checkValue.dmg === 1) {
      indice = INDICE_UN_POS;
    } else {
      indice = INDICE_UN_NEG;
    }
    return indice;
  };
  const getIndiceMSZag = () => {
    let indice;
    if (checkValue.zag === 1) {
      indice = INDICE_UN_POS;
    } else {
      indice = INDICE_UN_NEG;
    }
    return indice;
  };
  const getIndiceMSCs = () => {
    let indice;
    if (checkValue.cs === 1) {
      indice = INDICE_TROIS_POS;
    } else {
      indice = INDICE_TROIS_NEG;
    }
    return indice;
  };
  const getIndiceMSCh = () => {
    let indice;
    if (checkValue.ch === 1) {
      indice = INDICE_TROIS_POS;
    } else {
      indice = INDICE_TROIS_NEG;
    }
    return indice;
  };
  const getIndiceMSDeci = () => {
    let indice;
    if (typeDECI === 3) {
      indice = INDICE_TROIS_POS;
    } else {
      indice = INDICE_TROIS_NEG;
    }
    return indice;
  };
  const getIndiceMSSea = () => {
    let indice;
    if (checkValue.sea === 1) {
      indice = INDICE_TROIS_POS;
    } else {
      indice = INDICE_TROIS_NEG;
    }
    return indice;
  };
  const indiceSSiap = getIndiceMSSsiap();
  const indiceEpi = getIndiceMSEpi();
  const indiceEsi = getIndiceMSEsi();
  const indiceMeteo = getIndiceMSMeteo();
  const indiceMlci = getIndiceMSMlci();
  const indiceSsi = getIndiceMSSsi();
  const indiceDai = getIndiceMSDai();
  const indiceDfg = getIndiceMSdfg();
  const indiceDmg = getIndiceMSdmg();
  const indiceZag = getIndiceMSZag();
  const indiceCs = getIndiceMSCs();
  const indiceCh = getIndiceMSCh();
  const indiceDeci = getIndiceMSDeci();
  const indiceSea = getIndiceMSSea();
  const indiceIntermediaire =
    indiceSSiap +
    indiceEpi +
    indiceEsi +
    indiceMeteo +
    indiceMlci +
    indiceSsi +
    indiceDai +
    indiceDfg +
    indiceDmg +
    indiceZag +
    indiceCs +
    indiceCh +
    indiceDeci +
    indiceSea;
  const indiceGeneralMs = () => {
    let indice;
    if (indiceIntermediaire > 0) {
      indice = "+";
    } else if (indiceIntermediaire <= 0) {
      indice = "-";
    }
    return indice;
  };
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Indice Global Moyen de secours : {indiceGeneralMs()}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Indice intermediaire Moyen de secours : {indiceIntermediaire}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              indice Agent SSIAP: {indiceSSiap}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.ssiap === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="ssiap"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Equipe premiere intervention : {indiceEpi}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.epi === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="epi"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Equipe seconde intervention : {indiceEsi}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.esi === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="esi"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Station meteo : {indiceMeteo}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.meteo === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="meteo"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              materiel de lutte contre l'incendie: {indiceMlci}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.mlci === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="mlci"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              SSI :
            </Typography>
            <Checkbox
              checked={checkValue.ssi === 1}
              onChange={(event) => {
                setCheckValue({
                  ...checkValue,
                  [event.target.name]: event.target.checked ? 1 : 0
                });
              }}
              name="ssi"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1" gutterBottom>
              DAI adressable : {indiceDai}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.daia === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="daia"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" gutterBottom>
              Detection fixe gaz : {indiceDfg}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.dfg === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="dfg"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Detection mobile gaz : {indiceDmg}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.dmg === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="dmg"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Raccord zag : {indiceZag}
            </Typography>
            <Checkbox
              checked={checkValue.zag === 1}
              onChange={(event) => {
                setCheckValue({
                  ...checkValue,
                  [event.target.name]: event.target.checked ? 1 : 0
                });
              }}
              name="zag"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1" gutterBottom>
              CS :
            </Typography>
            <Checkbox
              checked={checkValue.cs === 1}
              onChange={(event) => {
                setCheckValue({
                  ...checkValue,
                  [event.target.name]: event.target.checked ? 1 : 0
                });
              }}
              name="cs"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1" gutterBottom>
              CH :
            </Typography>
            <Checkbox
              checked={checkValue.ch === 1}
              onChange={(event) => {
                setCheckValue({
                  ...checkValue,
                  [event.target.name]: event.target.checked ? 1 : 0
                });
              }}
              name="ch"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="subtitle1" gutterBottom>
              DECI : {indiceDeci}
            </Typography>
            <TextField
              type="number"
              id="surface"
              variant="outlined"
              name="surface"
              value={surface}
              onChange={(event) => {
                setSurface(event.target.value);
              }}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="typeStructure">type de DECI</InputLabel>
              <Select
                labelId="typeStructure"
                variant="outlined"
                value={typeDECI}
                onChange={(event) => setTypeDECI(event.target.value)}
              >
                <MenuItem value={0}>
                  <em></em>
                </MenuItem>
                <MenuItem value={3}>ERP</MenuItem>
                <MenuItem value={5}>stockage papier / plastique</MenuItem>
                <MenuItem value={10}>risque LIF</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="subtitle1" gutterBottom>
              Systeme d'extinction automatique : {indiceSea}
            </Typography>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={checkValue.sea === 1}
                  onChange={(event) => {
                    setCheckValue({
                      ...checkValue,
                      [event.target.name]: event.target.checked ? 1 : 0
                    });
                  }}
                  name="sea"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>
              <Grid item>Oui</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
