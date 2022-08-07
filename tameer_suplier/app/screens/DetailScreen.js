import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Screen from '../components/Screen';
import ChatIcon from '../components/ChatIcon';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ImageSlider from '../components/ImageSlider';
import {SocialIcon} from 'react-native-elements';
import config from '../config/config';
import MaterialFram from '../components/MaterialFram';
import Spinner from 'react-native-loading-spinner-overlay';
async function getData(id) {
  const url = config.server + 'api/companies/findById?id=' + id;
  return fetch(url).then(data => data.json());
}

function DetailScreen({route, navigation}) {
  // states
  const {id} = route.params;
  const [company, setCompany] = useState({
    images: [],
    company_detail: '',
    materials: [],
  });
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(id).then(company => {
      setCompany(company);
      setMaterials(company.materials);
      setLoading(false);
    });
  }, []);

  const ListHeaderComponent = () => {
    return (
      <View style={styles.body}>
        <View style={styles.description}>
          <AppText style={styles.title}>{company.company_detail.name}</AppText>
          <AppText style={styles.distance}>
            {company.company_detail.address}
          </AppText>
          <AppText style={styles.detail}>
            {company.company_detail.description}.
          </AppText>
          <AppText style={styles.link}>
            {company.company_detail.website}
          </AppText>
          <AppText style={styles.link}>www.democrop.com</AppText>
        </View>
        <View style={styles.slider}>
          <ImageSlider images={company.images} />
        </View>
        <View style={styles.contact}>
          <SocialIcon type="facebook" />
          <SocialIcon type="youtube" />
          <SocialIcon light type="twitter" />
          <SocialIcon light type="instagram" />
          <SocialIcon
            iconSize={30}
            style={{marginLeft: 30}}
            light
            type="phone"
          />
        </View>
        <AppText style={styles.listHeading}>Featured In</AppText>
      </View>
    );
  };

  return (
    <Screen style={{backgroundColor: colors.white}}>
      <View style={styles.toolbar}>
        <MaterialIcons
          name="arrow-back"
          style={styles.arrow}
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <View style={{flex: 1}} />
        <ChatIcon
          style={styles.icon}
          onPress={() =>
            navigation.navigate('Request', {
              contactList: [
                {
                  name: company.company_detail.name,
                  id: company.company_detail.company_id,
                },
              ],
            })
          }
        />
      </View>
      <FlatList
        style={{backgroundColor: colors.light, marginBottom: 100}}
        data={company.materials}
        numColumns={3}
        keyExtractor={listing => listing.material_is}
        ListHeaderComponent={<ListHeaderComponent />}
        renderItem={({item}) => (
          <MaterialFram name={item.name} image={item.image} />
        )}
      />
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: colors.secondary}}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    color: 'red',
  },
  icon: {
    alignSelf: 'flex-end',
    alignSelf: 'center',
    marginRight: 20,
  },
  arrow: {
    height: 24,
    marginLeft: 10,
  },
  description: {
    padding: 10,
  },
  title: {
    color: colors.medium,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 22,
  },
  distance: {
    fontSize: 14,
    color: colors.medium,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  detail: {
    color: colors.medium,
  },
  link: {
    color: 'dodgerblue',
  },
  slider: {
    marginVertical: 10,
  },
  contact: {
    flexDirection: 'row',
    height: 100,
  },
  listContainer: {
    height: '100%',
  },
  listHeading: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
export default DetailScreen;
