import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#23262D',
    padding: '20px 40px',
    borderRadius: 6,
    display: 'inline-block',
    margin: '10px 0',
  },
  title: {
    marginBottom: 10,
  },
  number: {
    marginRight: 20,
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: '#23262D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
