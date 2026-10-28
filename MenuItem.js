import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  // State mandiri untuk menghitung pesanan khusus menu tersebut
  const [qty, setQty] = useState(0);

  const handleTambah = () => {
    // 1. Naikkan state internal qty sebanyak +1
    setQty(prevQty => prevQty + 1);
    // 2. Panggil callback dari props untuk menambah totalPesanan di parent
    onTambahPesanan();
  };

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.namaText}>{nama}</Text>
        <Text style={styles.hargaText}>Rp {harga.toLocaleString('id-ID')}</Text>
        <Text style={styles.qtyText}>Jumlah: {qty}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleTambah}>
        <Text style={styles.buttonText}>+ Tambah Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    flex: 1,
  },
  namaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  hargaText: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  qtyText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D84315',
    marginTop: 6,
  },
  button: {
    backgroundColor: '#FF8A65',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default MenuItem;