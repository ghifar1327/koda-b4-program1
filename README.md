# Aplikasi ojek online
### Aplikasi pelayanan tranfortasi online karya anak bangsa
## Fitur Utama
* Menyediakan layanan tranportasi online mobil dan sepeda motor
* Mengkalkulasi tarif berdasarkan jarak per/kilometer
* Menyimpan history perjalanan

```mermaid 
flowchart TB
A([start])
Z((stop))
a[/Menu Utama/]
desi1{input}
b[/tujuan/]
c[/histoy/]
d[/exit/]
desi2{motor/mobil}
e[/awal = 14.000/]
f[/ perKm= 2500/]
desi3{jarak > 4}
g@{shape: proc, label: "awal + (jarak - 4) * perKm"}
h[ awal ]
i[/total/]
desi4{pesan y/n}
j[/awal = 20.000/]
k[/perKm = 4000/]
desi5{jarak > 4}
l@{shape: proc, label: "awal + (jarak - 4) * perkM"}
m[awal]


A--->a--->desi1--1-->b---desi2
desi1--2-->c--->a
desi1--3-->d--->Z
desi2--motor-->e--->f--->desi3--true-->g--->i
desi3--false-->h--->i--->desi4--ya-->a
desi2--mobil-->j--->k--->desi5--true-->l--->i
desi5--false-->m--->i

```