<div align="center">

# WildCity
### A Real-World City-Scale Testbed for Rendering, Simulation, and Spatial Intelligence
**ECCV 2026**

[**Xiangyu Han**](https://han-xiangyu.github.io/)<sup>1,2</sup> ,
**Mengyu Yang**<sup>2</sup> ,
**Jiaqi Li**<sup>2</sup> ,
**Bowen Chang**<sup>2</sup> ,
[**Ziyu Chen**](https://ziyc.github.io/)<sup>4</sup>
<br>
[**Hexu Zhao**](https://tarzanzhao.github.io/)<sup>2</sup> ,
**Rahul Kumar Agrawal**<sup>1</sup> ,
**Anthony Rodriguez**<sup>1</sup> ,
**Rajani Acharya**<sup>1</sup> ,
**Fiona Hua**<sup>1</sup>
<br>
[**Marco Pavone**](https://stanfordasl.github.io/people/prof-marco-pavone/)<sup>3,4</sup> ,
[**Chen Feng**](https://engineering.nyu.edu/faculty/chen-feng)<sup>2,†</sup> ,
[**Yiming Li**](https://yimingli-page.github.io/)<sup>2,3,†</sup>

<sup>1</sup>May Mobility&emsp;&emsp;<sup>2</sup>New York University&emsp;&emsp;<sup>3</sup>NVIDIA&emsp;&emsp;<sup>4</sup>Stanford University
<br>
<sup>†</sup>Corresponding authors

<a href="https://han-xiangyu.github.io/Wild-City/"><img src="https://img.shields.io/badge/Project_Page-WildCity-blue" alt="Project Page"></a>
<a href="https://han-xiangyu.github.io/Wild-City/"><img src="https://img.shields.io/badge/Paper-coming_soon-lightgrey" alt="Paper (coming soon)"></a>
<a href="https://han-xiangyu.github.io/Wild-City/"><img src="https://img.shields.io/badge/Dataset-coming_soon-lightgrey" alt="Dataset (coming soon)"></a>

</div>

<p align="center">
  <img src="https://raw.githubusercontent.com/han-xiangyu/Wild-City/page/src/assets/hero_teaser.png" alt="WildCity overview: data collection and processing, city-scale reconstruction, and embodied reasoning" width="100%">
</p>

## 🚧 Code Release

This repository will host the official dataset tooling, reconstruction baseline, and closed-loop simulator for **WildCity**. **Code, dataset access, and baselines are currently being prepared for release — stay tuned!**

- [ ] Dataset access & loaders
- [ ] Urban-tailored 3D Gaussian Splatting reconstruction baseline
- [ ] Evaluation scripts
- [ ] Closed-loop simulator

## Highlights

- **Real-world, city-scale multimodal data** collected by autonomous fleets in complex urban environments.
- **6 U.S. cities · 18 long-horizon logs · 1,507 km** of driving, averaging **83.7 km (~2.5 h) per log** and **~40 km² per city**.
- **3.01M synchronized keyframes** with 6 surround-view cameras, LiDAR, IMU, and GPS.
- **In-the-wild challenges**: dynamic objects, lighting and appearance changes, motion blur, and imperfect poses.
- **Baseline + closed-loop simulator** for city-scale reconstruction, extrapolated rendering, and embodied reasoning.

## Abstract

Humans can navigate an unfamiliar city and gradually form a coherent spatial mental map spanning tens of square kilometers. Can AI build spatial representations at a comparable scale? Although recent foundation models have advanced scene reconstruction and embodied intelligence, scaling to entire cities remains an open challenge, primarily due to the lack of city-scale data. To bridge the gap, we introduce **WildCity**, a real-world multimodal dataset collected by autonomous fleets traversing complex urban environments. Our dataset includes 18 trajectories, each averaging 83.7 kilometers in length, and preserves the core challenges of in-the-wild perception, e.g., dynamic objects, lighting variations, and imperfect camera poses. We further establish an urban-tailored reconstruction baseline and convert the reconstructed environments into a closed-loop simulator. Beyond the dataset and baseline, we systematically analyze the key challenges on the path to simulation-ready urban digital twins: scalability, extrapolation, and uncertainty. Ultimately, WildCity aims to catalyze progress not only in city-scale rendering, but more broadly in the pursuit of AI that can perceive, remember, and reason across space at a scale comparable to human cognition.

## Links

- 🌐 **Project Page:** https://han-xiangyu.github.io/Wild-City/
- 📄 **Paper:** coming soon
- 📦 **Dataset:** coming soon

## Citation

If you find WildCity useful in your research, please consider citing (this entry will be updated with the final venue details upon publication):

```bibtex
@inproceedings{han2026wildcity,
      title={WildCity: A Real-World City-Scale Testbed for Rendering, Simulation, and Spatial Intelligence},
      author={Han, Xiangyu and Yang, Mengyu and Li, Jiaqi and Chang, Bowen and Chen, Ziyu and Zhao, Hexu and Agrawal, Rahul Kumar and Rodriguez, Anthony and Acharya, Rajani and Hua, Fiona and Pavone, Marco and Feng, Chen and Li, Yiming},
      booktitle={European Conference on Computer Vision (ECCV)},
      year={2026},
}
```

## Contact

For questions about the dataset or code release, please open an issue on this repository.
