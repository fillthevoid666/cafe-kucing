import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import OrderSummary from './OrderSummary';
import MenuItem from './MenuItem';

// Data awal menu (Statis)
const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  // State global untuk mencatat total pesanan keseluruhan
  const [totalPesanan, setTotalPesanan] = useState(0);

  // Fungsi callback untuk menambah total pesanan di parent
  const handleTambahTotal = () => {
    setTotalPesanan(prevTotal => prevTotal + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>🐾 Kafe Kucing Order 🐾</Text>
        
        {/* Komponen Anak 1: Ringkasan Pesanan */}
        <OrderSummary totalCount={totalPesanan} />

        {/* Daftar Menu */}
        <Text style={styles.sectionTitle}>Daftar Menu</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {DAFTAR_MENU.map(item => (
            <MenuItem
              key={item.id}
              nama={item.nama}
              harga={item.harga}
              onTambahPesanan={handleTambahTotal}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#4E342E',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333333',
  },
});