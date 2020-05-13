import {StyleSheet, Dimensions} from 'react-native';

const stylesCard = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F3F4F9',
    width: Dimensions.get('screen').width - 30,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 10,
  },
  cardStatus_Complete: {
    backgroundColor: '#58DD7E',
    width: 100,
    height: 10,
    borderRadius: 5,
    margin: 10,
    marginStart: 0,
    alignSelf: 'flex-start',
  },
  cardStatus_Pending: {
    backgroundColor: '#F0E47A',
    width: 100,
    height: 10,
    borderRadius: 5,
    margin: 10,
    marginStart: 0,
    alignSelf: 'flex-start',
  },
  cardContent: {
    padding: 10,
  },
  innerCardContent: {
    flexDirection: 'row',
  },
  cardDetailsText: {
    fontWeight: 'bold',
  },
});

export default stylesCard;
