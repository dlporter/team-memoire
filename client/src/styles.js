import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(191, 85, 236, 1)',
    fontweight: 'bold',
  },
  image: {
    marginLeft: '15px',
    marginRight: '15px',
  },
}));
