const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

const mahasiswa = [
  {
    id: 1,
    nama: "orang satu",
    kelas: "it4606",
    nim: "1303232"
  },
  {
    id: 2,
    nama: "orang dua",
    kelas: "it4605",
    nim: "1301132"
  },
  {
    id: 3,
    nama: "orang tiga",
    kelas: "it4607",
    nim: "1303456"
  }
];

// API endpoint untuk getAll
app.get('/api/mahasiswa', (req, res) => {
  try {

    const responseData = mahasiswa.map(({ id, ...rest }) => rest);
    
    res.status(200).json({
      data: responseData
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
});

// API endpoint untuk getByID
app.get('/api/mahasiswa/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const mahasiswaById = mahasiswa.find(m => m.id === id);
    
    if (!mahasiswaById) {
      return res.status(404).json({
        message: 'Mahasiswa tidak ditemukan'
      });
    }
    
    const { id: _, ...responseData } = mahasiswaById;
    
    res.status(200).json({
      data: responseData
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Route untuk root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Backend Warmup API',
    endpoints: {
      getAllMahasiswa: 'GET /api/mahasiswa',
      getMahasiswaById: 'GET /api/mahasiswa/:id'
    }
  });
});

// server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`- GET /api/mahasiswa (Get All)`);
  console.log(`- GET /api/mahasiswa/:id (Get By ID)`);
});