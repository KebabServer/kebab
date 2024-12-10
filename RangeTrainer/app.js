const cardOrder = ["2d2c", "2h2c", "2h2d", "2s2c", "2s2d", "2s2h", "3c2c", "3c2d", "3c2h", "3c2s", "3d2c", "3d2d", "3d2h", "3d2s", "3d3c", "3h2c", "3h2d", "3h2h", "3h2s", "3h3c", "3h3d", "3s2c", "3s2d", "3s2h", "3s2s", "3s3c", "3s3d", "3s3h", "4c2c", "4c2d", "4c2h", "4c2s", "4c3c", "4c3d", "4c3h", "4c3s", "4d2c", "4d2d", "4d2h", "4d2s", "4d3c", "4d3d", "4d3h", "4d3s", "4d4c", "4h2c", "4h2d", "4h2h", "4h2s", "4h3c", "4h3d", "4h3h", "4h3s", "4h4c", "4h4d", "4s2c", "4s2d", "4s2h", "4s2s", "4s3c", "4s3d", "4s3h", "4s3s", "4s4c", "4s4d", "4s4h", "5c2c", "5c2d", "5c2h", "5c2s", "5c3c", "5c3d", "5c3h", "5c3s", "5c4c", "5c4d", "5c4h", "5c4s", "5d2c", "5d2d", "5d2h", "5d2s", "5d3c", "5d3d", "5d3h", "5d3s", "5d4c", "5d4d", "5d4h", "5d4s", "5d5c", "5h2c", "5h2d", "5h2h", "5h2s", "5h3c", "5h3d", "5h3h", "5h3s", "5h4c", "5h4d", "5h4h", "5h4s", "5h5c", "5h5d", "5s2c", "5s2d", "5s2h", "5s2s", "5s3c", "5s3d", "5s3h", "5s3s", "5s4c", "5s4d", "5s4h", "5s4s", "5s5c", "5s5d", "5s5h", "6c2c", "6c2d", "6c2h", "6c2s", "6c3c", "6c3d", "6c3h", "6c3s", "6c4c", "6c4d", "6c4h", "6c4s", "6c5c", "6c5d", "6c5h", "6c5s", "6d2c", "6d2d", "6d2h", "6d2s", "6d3c", "6d3d", "6d3h", "6d3s", "6d4c", "6d4d", "6d4h", "6d4s", "6d5c", "6d5d", "6d5h", "6d5s", "6d6c", "6h2c", "6h2d", "6h2h", "6h2s", "6h3c", "6h3d", "6h3h", "6h3s", "6h4c", "6h4d", "6h4h", "6h4s", "6h5c", "6h5d", "6h5h", "6h5s", "6h6c", "6h6d", "6s2c", "6s2d", "6s2h", "6s2s", "6s3c", "6s3d", "6s3h", "6s3s", "6s4c", "6s4d", "6s4h", "6s4s", "6s5c", "6s5d", "6s5h", "6s5s", "6s6c", "6s6d", "6s6h", "7c2c", "7c2d", "7c2h", "7c2s", "7c3c", "7c3d", "7c3h", "7c3s", "7c4c", "7c4d", "7c4h", "7c4s", "7c5c", "7c5d", "7c5h", "7c5s", "7c6c", "7c6d", "7c6h", "7c6s", "7d2c", "7d2d", "7d2h", "7d2s", "7d3c", "7d3d", "7d3h", "7d3s", "7d4c", "7d4d", "7d4h", "7d4s", "7d5c", "7d5d", "7d5h", "7d5s", "7d6c", "7d6d", "7d6h", "7d6s", "7d7c", "7h2c", "7h2d", "7h2h", "7h2s", "7h3c", "7h3d", "7h3h", "7h3s", "7h4c", "7h4d", "7h4h", "7h4s", "7h5c", "7h5d", "7h5h", "7h5s", "7h6c", "7h6d", "7h6h", "7h6s", "7h7c", "7h7d", "7s2c", "7s2d", "7s2h", "7s2s", "7s3c", "7s3d", "7s3h", "7s3s", "7s4c", "7s4d", "7s4h", "7s4s", "7s5c", "7s5d", "7s5h", "7s5s", "7s6c", "7s6d", "7s6h", "7s6s", "7s7c", "7s7d", "7s7h", "8c2c", "8c2d", "8c2h", "8c2s", "8c3c", "8c3d", "8c3h", "8c3s", "8c4c", "8c4d", "8c4h", "8c4s", "8c5c", "8c5d", "8c5h", "8c5s", "8c6c", "8c6d", "8c6h", "8c6s", "8c7c", "8c7d", "8c7h", "8c7s", "8d2c", "8d2d", "8d2h", "8d2s", "8d3c", "8d3d", "8d3h", "8d3s", "8d4c", "8d4d", "8d4h", "8d4s", "8d5c", "8d5d", "8d5h", "8d5s", "8d6c", "8d6d", "8d6h", "8d6s", "8d7c", "8d7d", "8d7h", "8d7s", "8d8c", "8h2c", "8h2d", "8h2h", "8h2s", "8h3c", "8h3d", "8h3h", "8h3s", "8h4c", "8h4d", "8h4h", "8h4s", "8h5c", "8h5d", "8h5h", "8h5s", "8h6c", "8h6d", "8h6h", "8h6s", "8h7c", "8h7d", "8h7h", "8h7s", "8h8c", "8h8d", "8s2c", "8s2d", "8s2h", "8s2s", "8s3c", "8s3d", "8s3h", "8s3s", "8s4c", "8s4d", "8s4h", "8s4s", "8s5c", "8s5d", "8s5h", "8s5s", "8s6c", "8s6d", "8s6h", "8s6s", "8s7c", "8s7d", "8s7h", "8s7s", "8s8c", "8s8d", "8s8h", "9c2c", "9c2d", "9c2h", "9c2s", "9c3c", "9c3d", "9c3h", "9c3s", "9c4c", "9c4d", "9c4h", "9c4s", "9c5c", "9c5d", "9c5h", "9c5s", "9c6c", "9c6d", "9c6h", "9c6s", "9c7c", "9c7d", "9c7h", "9c7s", "9c8c", "9c8d", "9c8h", "9c8s", "9d2c", "9d2d", "9d2h", "9d2s", "9d3c", "9d3d", "9d3h", "9d3s", "9d4c", "9d4d", "9d4h", "9d4s", "9d5c", "9d5d", "9d5h", "9d5s", "9d6c", "9d6d", "9d6h", "9d6s", "9d7c", "9d7d", "9d7h", "9d7s", "9d8c", "9d8d", "9d8h", "9d8s", "9d9c", "9h2c", "9h2d", "9h2h", "9h2s", "9h3c", "9h3d", "9h3h", "9h3s", "9h4c", "9h4d", "9h4h", "9h4s", "9h5c", "9h5d", "9h5h", "9h5s", "9h6c", "9h6d", "9h6h", "9h6s", "9h7c", "9h7d", "9h7h", "9h7s", "9h8c", "9h8d", "9h8h", "9h8s", "9h9c", "9h9d", "9s2c", "9s2d", "9s2h", "9s2s", "9s3c", "9s3d", "9s3h", "9s3s", "9s4c", "9s4d", "9s4h", "9s4s", "9s5c", "9s5d", "9s5h", "9s5s", "9s6c", "9s6d", "9s6h", "9s6s", "9s7c", "9s7d", "9s7h", "9s7s", "9s8c", "9s8d", "9s8h", "9s8s", "9s9c", "9s9d", "9s9h", "Tc2c", "Tc2d", "Tc2h", "Tc2s", "Tc3c", "Tc3d", "Tc3h", "Tc3s", "Tc4c", "Tc4d", "Tc4h", "Tc4s", "Tc5c", "Tc5d", "Tc5h", "Tc5s", "Tc6c", "Tc6d", "Tc6h", "Tc6s", "Tc7c", "Tc7d", "Tc7h", "Tc7s", "Tc8c", "Tc8d", "Tc8h", "Tc8s", "Tc9c", "Tc9d", "Tc9h", "Tc9s", "Td2c", "Td2d", "Td2h", "Td2s", "Td3c", "Td3d", "Td3h", "Td3s", "Td4c", "Td4d", "Td4h", "Td4s", "Td5c", "Td5d", "Td5h", "Td5s", "Td6c", "Td6d", "Td6h", "Td6s", "Td7c", "Td7d", "Td7h", "Td7s", "Td8c", "Td8d", "Td8h", "Td8s", "Td9c", "Td9d", "Td9h", "Td9s", "TdTc", "Th2c", "Th2d", "Th2h", "Th2s", "Th3c", "Th3d", "Th3h", "Th3s", "Th4c", "Th4d", "Th4h", "Th4s", "Th5c", "Th5d", "Th5h", "Th5s", "Th6c", "Th6d", "Th6h", "Th6s", "Th7c", "Th7d", "Th7h", "Th7s", "Th8c", "Th8d", "Th8h", "Th8s", "Th9c", "Th9d", "Th9h", "Th9s", "ThTc", "ThTd", "Ts2c", "Ts2d", "Ts2h", "Ts2s", "Ts3c", "Ts3d", "Ts3h", "Ts3s", "Ts4c", "Ts4d", "Ts4h", "Ts4s", "Ts5c", "Ts5d", "Ts5h", "Ts5s", "Ts6c", "Ts6d", "Ts6h", "Ts6s", "Ts7c", "Ts7d", "Ts7h", "Ts7s", "Ts8c", "Ts8d", "Ts8h", "Ts8s", "Ts9c", "Ts9d", "Ts9h", "Ts9s", "TsTc", "TsTd", "TsTh", "Jc2c", "Jc2d", "Jc2h", "Jc2s", "Jc3c", "Jc3d", "Jc3h", "Jc3s", "Jc4c", "Jc4d", "Jc4h", "Jc4s", "Jc5c", "Jc5d", "Jc5h", "Jc5s", "Jc6c", "Jc6d", "Jc6h", "Jc6s", "Jc7c", "Jc7d", "Jc7h", "Jc7s", "Jc8c", "Jc8d", "Jc8h", "Jc8s", "Jc9c", "Jc9d", "Jc9h", "Jc9s", "JcTc", "JcTd", "JcTh", "JcTs", "Jd2c", "Jd2d", "Jd2h", "Jd2s", "Jd3c", "Jd3d", "Jd3h", "Jd3s", "Jd4c", "Jd4d", "Jd4h", "Jd4s", "Jd5c", "Jd5d", "Jd5h", "Jd5s", "Jd6c", "Jd6d", "Jd6h", "Jd6s", "Jd7c", "Jd7d", "Jd7h", "Jd7s", "Jd8c", "Jd8d", "Jd8h", "Jd8s", "Jd9c", "Jd9d", "Jd9h", "Jd9s", "JdTc", "JdTd", "JdTh", "JdTs", "JdJc", "Jh2c", "Jh2d", "Jh2h", "Jh2s", "Jh3c", "Jh3d", "Jh3h", "Jh3s", "Jh4c", "Jh4d", "Jh4h", "Jh4s", "Jh5c", "Jh5d", "Jh5h", "Jh5s", "Jh6c", "Jh6d", "Jh6h", "Jh6s", "Jh7c", "Jh7d", "Jh7h", "Jh7s", "Jh8c", "Jh8d", "Jh8h", "Jh8s", "Jh9c", "Jh9d", "Jh9h", "Jh9s", "JhTc", "JhTd", "JhTh", "JhTs", "JhJc", "JhJd", "Js2c", "Js2d", "Js2h", "Js2s", "Js3c", "Js3d", "Js3h", "Js3s", "Js4c", "Js4d", "Js4h", "Js4s", "Js5c", "Js5d", "Js5h", "Js5s", "Js6c", "Js6d", "Js6h", "Js6s", "Js7c", "Js7d", "Js7h", "Js7s", "Js8c", "Js8d", "Js8h", "Js8s", "Js9c", "Js9d", "Js9h", "Js9s", "JsTc", "JsTd", "JsTh", "JsTs", "JsJc", "JsJd", "JsJh", "Qc2c", "Qc2d", "Qc2h", "Qc2s", "Qc3c", "Qc3d", "Qc3h", "Qc3s", "Qc4c", "Qc4d", "Qc4h", "Qc4s", "Qc5c", "Qc5d", "Qc5h", "Qc5s", "Qc6c", "Qc6d", "Qc6h", "Qc6s", "Qc7c", "Qc7d", "Qc7h", "Qc7s", "Qc8c", "Qc8d", "Qc8h", "Qc8s", "Qc9c", "Qc9d", "Qc9h", "Qc9s", "QcTc", "QcTd", "QcTh", "QcTs", "QcJc", "QcJd", "QcJh", "QcJs", "Qd2c", "Qd2d", "Qd2h", "Qd2s", "Qd3c", "Qd3d", "Qd3h", "Qd3s", "Qd4c", "Qd4d", "Qd4h", "Qd4s", "Qd5c", "Qd5d", "Qd5h", "Qd5s", "Qd6c", "Qd6d", "Qd6h", "Qd6s", "Qd7c", "Qd7d", "Qd7h", "Qd7s", "Qd8c", "Qd8d", "Qd8h", "Qd8s", "Qd9c", "Qd9d", "Qd9h", "Qd9s", "QdTc", "QdTd", "QdTh", "QdTs", "QdJc", "QdJd", "QdJh", "QdJs", "QdQc", "Qh2c", "Qh2d", "Qh2h", "Qh2s", "Qh3c", "Qh3d", "Qh3h", "Qh3s", "Qh4c", "Qh4d", "Qh4h", "Qh4s", "Qh5c", "Qh5d", "Qh5h", "Qh5s", "Qh6c", "Qh6d", "Qh6h", "Qh6s", "Qh7c", "Qh7d", "Qh7h", "Qh7s", "Qh8c", "Qh8d", "Qh8h", "Qh8s", "Qh9c", "Qh9d", "Qh9h", "Qh9s", "QhTc", "QhTd", "QhTh", "QhTs", "QhJc", "QhJd", "QhJh", "QhJs", "QhQc", "QhQd", "Qs2c", "Qs2d", "Qs2h", "Qs2s", "Qs3c", "Qs3d", "Qs3h", "Qs3s", "Qs4c", "Qs4d", "Qs4h", "Qs4s", "Qs5c", "Qs5d", "Qs5h", "Qs5s", "Qs6c", "Qs6d", "Qs6h", "Qs6s", "Qs7c", "Qs7d", "Qs7h", "Qs7s", "Qs8c", "Qs8d", "Qs8h", "Qs8s", "Qs9c", "Qs9d", "Qs9h", "Qs9s", "QsTc", "QsTd", "QsTh", "QsTs", "QsJc", "QsJd", "QsJh", "QsJs", "QsQc", "QsQd", "QsQh", "Kc2c", "Kc2d", "Kc2h", "Kc2s", "Kc3c", "Kc3d", "Kc3h", "Kc3s", "Kc4c", "Kc4d", "Kc4h", "Kc4s", "Kc5c", "Kc5d", "Kc5h", "Kc5s", "Kc6c", "Kc6d", "Kc6h", "Kc6s", "Kc7c", "Kc7d", "Kc7h", "Kc7s", "Kc8c", "Kc8d", "Kc8h", "Kc8s", "Kc9c", "Kc9d", "Kc9h", "Kc9s", "KcTc", "KcTd", "KcTh", "KcTs", "KcJc", "KcJd", "KcJh", "KcJs", "KcQc", "KcQd", "KcQh", "KcQs", "Kd2c", "Kd2d", "Kd2h", "Kd2s", "Kd3c", "Kd3d", "Kd3h", "Kd3s", "Kd4c", "Kd4d", "Kd4h", "Kd4s", "Kd5c", "Kd5d", "Kd5h", "Kd5s", "Kd6c", "Kd6d", "Kd6h", "Kd6s", "Kd7c", "Kd7d", "Kd7h", "Kd7s", "Kd8c", "Kd8d", "Kd8h", "Kd8s", "Kd9c", "Kd9d", "Kd9h", "Kd9s", "KdTc", "KdTd", "KdTh", "KdTs", "KdJc", "KdJd", "KdJh", "KdJs", "KdQc", "KdQd", "KdQh", "KdQs", "KdKc", "Kh2c", "Kh2d", "Kh2h", "Kh2s", "Kh3c", "Kh3d", "Kh3h", "Kh3s", "Kh4c", "Kh4d", "Kh4h", "Kh4s", "Kh5c", "Kh5d", "Kh5h", "Kh5s", "Kh6c", "Kh6d", "Kh6h", "Kh6s", "Kh7c", "Kh7d", "Kh7h", "Kh7s", "Kh8c", "Kh8d", "Kh8h", "Kh8s", "Kh9c", "Kh9d", "Kh9h", "Kh9s", "KhTc", "KhTd", "KhTh", "KhTs", "KhJc", "KhJd", "KhJh", "KhJs", "KhQc", "KhQd", "KhQh", "KhQs", "KhKc", "KhKd", "Ks2c", "Ks2d", "Ks2h", "Ks2s", "Ks3c", "Ks3d", "Ks3h", "Ks3s", "Ks4c", "Ks4d", "Ks4h", "Ks4s", "Ks5c", "Ks5d", "Ks5h", "Ks5s", "Ks6c", "Ks6d", "Ks6h", "Ks6s", "Ks7c", "Ks7d", "Ks7h", "Ks7s", "Ks8c", "Ks8d", "Ks8h", "Ks8s", "Ks9c", "Ks9d", "Ks9h", "Ks9s", "KsTc", "KsTd", "KsTh", "KsTs", "KsJc", "KsJd", "KsJh", "KsJs", "KsQc", "KsQd", "KsQh", "KsQs", "KsKc", "KsKd", "KsKh", "Ac2c", "Ac2d", "Ac2h", "Ac2s", "Ac3c", "Ac3d", "Ac3h", "Ac3s", "Ac4c", "Ac4d", "Ac4h", "Ac4s", "Ac5c", "Ac5d", "Ac5h", "Ac5s", "Ac6c", "Ac6d", "Ac6h", "Ac6s", "Ac7c", "Ac7d", "Ac7h", "Ac7s", "Ac8c", "Ac8d", "Ac8h", "Ac8s", "Ac9c", "Ac9d", "Ac9h", "Ac9s", "AcTc", "AcTd", "AcTh", "AcTs", "AcJc", "AcJd", "AcJh", "AcJs", "AcQc", "AcQd", "AcQh", "AcQs", "AcKc", "AcKd", "AcKh", "AcKs", "Ad2c", "Ad2d", "Ad2h", "Ad2s", "Ad3c", "Ad3d", "Ad3h", "Ad3s", "Ad4c", "Ad4d", "Ad4h", "Ad4s", "Ad5c", "Ad5d", "Ad5h", "Ad5s", "Ad6c", "Ad6d", "Ad6h", "Ad6s", "Ad7c", "Ad7d", "Ad7h", "Ad7s", "Ad8c", "Ad8d", "Ad8h", "Ad8s", "Ad9c", "Ad9d", "Ad9h", "Ad9s", "AdTc", "AdTd", "AdTh", "AdTs", "AdJc", "AdJd", "AdJh", "AdJs", "AdQc", "AdQd", "AdQh", "AdQs", "AdKc", "AdKd", "AdKh", "AdKs", "AdAc", "Ah2c", "Ah2d", "Ah2h", "Ah2s", "Ah3c", "Ah3d", "Ah3h", "Ah3s", "Ah4c", "Ah4d", "Ah4h", "Ah4s", "Ah5c", "Ah5d", "Ah5h", "Ah5s", "Ah6c", "Ah6d", "Ah6h", "Ah6s", "Ah7c", "Ah7d", "Ah7h", "Ah7s", "Ah8c", "Ah8d", "Ah8h", "Ah8s", "Ah9c", "Ah9d", "Ah9h", "Ah9s", "AhTc", "AhTd", "AhTh", "AhTs", "AhJc", "AhJd", "AhJh", "AhJs", "AhQc", "AhQd", "AhQh", "AhQs", "AhKc", "AhKd", "AhKh", "AhKs", "AhAc", "AhAd", "As2c", "As2d", "As2h", "As2s", "As3c", "As3d", "As3h", "As3s", "As4c", "As4d", "As4h", "As4s", "As5c", "As5d", "As5h", "As5s", "As6c", "As6d", "As6h", "As6s", "As7c", "As7d", "As7h", "As7s", "As8c", "As8d", "As8h", "As8s", "As9c", "As9d", "As9h", "As9s", "AsTc", "AsTd", "AsTh", "AsTs", "AsJc", "AsJd", "AsJh", "AsJs", "AsQc", "AsQd", "AsQh", "AsQs", "AsKc", "AsKd", "AsKh", "AsKs", "AsAc", "AsAd", "AsAh"];
const cardOrderX = [12, 12, 12, 12, 12, 12, 11, 12, 12, 12, 12, 11, 12, 12, 11, 12, 12, 11, 12, 11, 11, 12, 12, 12, 11, 11, 11, 11, 10, 12, 12, 12, 10, 11, 11, 11, 12, 10, 12, 12, 11, 10, 11, 11, 10, 12, 12, 10, 12, 11, 11, 10, 11, 10, 10, 12, 12, 12, 10, 11, 11, 11, 10, 10, 10, 10, 9, 12, 12, 12, 9, 11, 11, 11, 9, 10, 10, 10, 12, 9, 12, 12, 11, 9, 11, 11, 10, 9, 10, 10, 9, 12, 12, 9, 12, 11, 11, 9, 11, 10, 10, 9, 10, 9, 9, 12, 12, 12, 9, 11, 11, 11, 9, 10, 10, 10, 9, 9, 9, 9, 8, 12, 12, 12, 8, 11, 11, 11, 8, 10, 10, 10, 8, 9, 9, 9, 12, 8, 12, 12, 11, 8, 11, 11, 10, 8, 10, 10, 9, 8, 9, 9, 8, 12, 12, 8, 12, 11, 11, 8, 11, 10, 10, 8, 10, 9, 9, 8, 9, 8, 8, 12, 12, 12, 8, 11, 11, 11, 8, 10, 10, 10, 8, 9, 9, 9, 8, 8, 8, 8, 7, 12, 12, 12, 7, 11, 11, 11, 7, 10, 10, 10, 7, 9, 9, 9, 7, 8, 8, 8, 12, 7, 12, 12, 11, 7, 11, 11, 10, 7, 10, 10, 9, 7, 9, 9, 8, 7, 8, 8, 7, 12, 12, 7, 12, 11, 11, 7, 11, 10, 10, 7, 10, 9, 9, 7, 9, 8, 8, 7, 8, 7, 7, 12, 12, 12, 7, 11, 11, 11, 7, 10, 10, 10, 7, 9, 9, 9, 7, 8, 8, 8, 7, 7, 7, 7, 6, 12, 12, 12, 6, 11, 11, 11, 6, 10, 10, 10, 6, 9, 9, 9, 6, 8, 8, 8, 6, 7, 7, 7, 12, 6, 12, 12, 11, 6, 11, 11, 10, 6, 10, 10, 9, 6, 9, 9, 8, 6, 8, 8, 7, 6, 7, 7, 6, 12, 12, 6, 12, 11, 11, 6, 11, 10, 10, 6, 10, 9, 9, 6, 9, 8, 8, 6, 8, 7, 7, 6, 7, 6, 6, 12, 12, 12, 6, 11, 11, 11, 6, 10, 10, 10, 6, 9, 9, 9, 6, 8, 8, 8, 6, 7, 7, 7, 6, 6, 6, 6, 5, 12, 12, 12, 5, 11, 11, 11, 5, 10, 10, 10, 5, 9, 9, 9, 5, 8, 8, 8, 5, 7, 7, 7, 5, 6, 6, 6, 12, 5, 12, 12, 11, 5, 11, 11, 10, 5, 10, 10, 9, 5, 9, 9, 8, 5, 8, 8, 7, 5, 7, 7, 6, 5, 6, 6, 5, 12, 12, 5, 12, 11, 11, 5, 11, 10, 10, 5, 10, 9, 9, 5, 9, 8, 8, 5, 8, 7, 7, 5, 7, 6, 6, 5, 6, 5, 5, 12, 12, 12, 5, 11, 11, 11, 5, 10, 10, 10, 5, 9, 9, 9, 5, 8, 8, 8, 5, 7, 7, 7, 5, 6, 6, 6, 5, 5, 5, 5, 4, 12, 12, 12, 4, 11, 11, 11, 4, 10, 10, 10, 4, 9, 9, 9, 4, 8, 8, 8, 4, 7, 7, 7, 4, 6, 6, 6, 4, 5, 5, 5, 12, 4, 12, 12, 11, 4, 11, 11, 10, 4, 10, 10, 9, 4, 9, 9, 8, 4, 8, 8, 7, 4, 7, 7, 6, 4, 6, 6, 5, 4, 5, 5, 4, 12, 12, 4, 12, 11, 11, 4, 11, 10, 10, 4, 10, 9, 9, 4, 9, 8, 8, 4, 8, 7, 7, 4, 7, 6, 6, 4, 6, 5, 5, 4, 5, 4, 4, 12, 12, 12, 4, 11, 11, 11, 4, 10, 10, 10, 4, 9, 9, 9, 4, 8, 8, 8, 4, 7, 7, 7, 4, 6, 6, 6, 4, 5, 5, 5, 4, 4, 4, 4, 3, 12, 12, 12, 3, 11, 11, 11, 3, 10, 10, 10, 3, 9, 9, 9, 3, 8, 8, 8, 3, 7, 7, 7, 3, 6, 6, 6, 3, 5, 5, 5, 3, 4, 4, 4, 12, 3, 12, 12, 11, 3, 11, 11, 10, 3, 10, 10, 9, 3, 9, 9, 8, 3, 8, 8, 7, 3, 7, 7, 6, 3, 6, 6, 5, 3, 5, 5, 4, 3, 4, 4, 3, 12, 12, 3, 12, 11, 11, 3, 11, 10, 10, 3, 10, 9, 9, 3, 9, 8, 8, 3, 8, 7, 7, 3, 7, 6, 6, 3, 6, 5, 5, 3, 5, 4, 4, 3, 4, 3, 3, 12, 12, 12, 3, 11, 11, 11, 3, 10, 10, 10, 3, 9, 9, 9, 3, 8, 8, 8, 3, 7, 7, 7, 3, 6, 6, 6, 3, 5, 5, 5, 3, 4, 4, 4, 3, 3, 3, 3, 2, 12, 12, 12, 2, 11, 11, 11, 2, 10, 10, 10, 2, 9, 9, 9, 2, 8, 8, 8, 2, 7, 7, 7, 2, 6, 6, 6, 2, 5, 5, 5, 2, 4, 4, 4, 2, 3, 3, 3, 12, 2, 12, 12, 11, 2, 11, 11, 10, 2, 10, 10, 9, 2, 9, 9, 8, 2, 8, 8, 7, 2, 7, 7, 6, 2, 6, 6, 5, 2, 5, 5, 4, 2, 4, 4, 3, 2, 3, 3, 2, 12, 12, 2, 12, 11, 11, 2, 11, 10, 10, 2, 10, 9, 9, 2, 9, 8, 8, 2, 8, 7, 7, 2, 7, 6, 6, 2, 6, 5, 5, 2, 5, 4, 4, 2, 4, 3, 3, 2, 3, 2, 2, 12, 12, 12, 2, 11, 11, 11, 2, 10, 10, 10, 2, 9, 9, 9, 2, 8, 8, 8, 2, 7, 7, 7, 2, 6, 6, 6, 2, 5, 5, 5, 2, 4, 4, 4, 2, 3, 3, 3, 2, 2, 2, 2, 1, 12, 12, 12, 1, 11, 11, 11, 1, 10, 10, 10, 1, 9, 9, 9, 1, 8, 8, 8, 1, 7, 7, 7, 1, 6, 6, 6, 1, 5, 5, 5, 1, 4, 4, 4, 1, 3, 3, 3, 1, 2, 2, 2, 12, 1, 12, 12, 11, 1, 11, 11, 10, 1, 10, 10, 9, 1, 9, 9, 8, 1, 8, 8, 7, 1, 7, 7, 6, 1, 6, 6, 5, 1, 5, 5, 4, 1, 4, 4, 3, 1, 3, 3, 2, 1, 2, 2, 1, 12, 12, 1, 12, 11, 11, 1, 11, 10, 10, 1, 10, 9, 9, 1, 9, 8, 8, 1, 8, 7, 7, 1, 7, 6, 6, 1, 6, 5, 5, 1, 5, 4, 4, 1, 4, 3, 3, 1, 3, 2, 2, 1, 2, 1, 1, 12, 12, 12, 1, 11, 11, 11, 1, 10, 10, 10, 1, 9, 9, 9, 1, 8, 8, 8, 1, 7, 7, 7, 1, 6, 6, 6, 1, 5, 5, 5, 1, 4, 4, 4, 1, 3, 3, 3, 1, 2, 2, 2, 1, 1, 1, 1, 0, 12, 12, 12, 0, 11, 11, 11, 0, 10, 10, 10, 0, 9, 9, 9, 0, 8, 8, 8, 0, 7, 7, 7, 0, 6, 6, 6, 0, 5, 5, 5, 0, 4, 4, 4, 0, 3, 3, 3, 0, 2, 2, 2, 0, 1, 1, 1, 12, 0, 12, 12, 11, 0, 11, 11, 10, 0, 10, 10, 9, 0, 9, 9, 8, 0, 8, 8, 7, 0, 7, 7, 6, 0, 6, 6, 5, 0, 5, 5, 4, 0, 4, 4, 3, 0, 3, 3, 2, 0, 2, 2, 1, 0, 1, 1, 0, 12, 12, 0, 12, 11, 11, 0, 11, 10, 10, 0, 10, 9, 9, 0, 9, 8, 8, 0, 8, 7, 7, 0, 7, 6, 6, 0, 6, 5, 5, 0, 5, 4, 4, 0, 4, 3, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0, 1, 0, 0, 12, 12, 12, 0, 11, 11, 11, 0, 10, 10, 10, 0, 9, 9, 9, 0, 8, 8, 8, 0, 7, 7, 7, 0, 6, 6, 6, 0, 5, 5, 5, 0, 4, 4, 4, 0, 3, 3, 3, 0, 2, 2, 2, 0, 1, 1, 1, 0, 0, 0, 0];
const cardOrderY = [12, 12, 12, 12, 12, 12, 12, 11, 11, 11, 11, 12, 11, 11, 11, 11, 11, 12, 11, 11, 11, 11, 11, 11, 12, 11, 11, 11, 12, 10, 10, 10, 11, 10, 10, 10, 10, 12, 10, 10, 10, 11, 10, 10, 10, 10, 10, 12, 10, 10, 10, 11, 10, 10, 10, 10, 10, 10, 12, 10, 10, 10, 11, 10, 10, 10, 12, 9, 9, 9, 11, 9, 9, 9, 10, 9, 9, 9, 9, 12, 9, 9, 9, 11, 9, 9, 9, 10, 9, 9, 9, 9, 9, 12, 9, 9, 9, 11, 9, 9, 9, 10, 9, 9, 9, 9, 9, 9, 12, 9, 9, 9, 11, 9, 9, 9, 10, 9, 9, 9, 12, 8, 8, 8, 11, 8, 8, 8, 10, 8, 8, 8, 9, 8, 8, 8, 8, 12, 8, 8, 8, 11, 8, 8, 8, 10, 8, 8, 8, 9, 8, 8, 8, 8, 8, 12, 8, 8, 8, 11, 8, 8, 8, 10, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 11, 8, 8, 8, 10, 8, 8, 8, 9, 8, 8, 8, 12, 7, 7, 7, 11, 7, 7, 7, 10, 7, 7, 7, 9, 7, 7, 7, 8, 7, 7, 7, 7, 12, 7, 7, 7, 11, 7, 7, 7, 10, 7, 7, 7, 9, 7, 7, 7, 8, 7, 7, 7, 7, 7, 12, 7, 7, 7, 11, 7, 7, 7, 10, 7, 7, 7, 9, 7, 7, 7, 8, 7, 7, 7, 7, 7, 7, 12, 7, 7, 7, 11, 7, 7, 7, 10, 7, 7, 7, 9, 7, 7, 7, 8, 7, 7, 7, 12, 6, 6, 6, 11, 6, 6, 6, 10, 6, 6, 6, 9, 6, 6, 6, 8, 6, 6, 6, 7, 6, 6, 6, 6, 12, 6, 6, 6, 11, 6, 6, 6, 10, 6, 6, 6, 9, 6, 6, 6, 8, 6, 6, 6, 7, 6, 6, 6, 6, 6, 12, 6, 6, 6, 11, 6, 6, 6, 10, 6, 6, 6, 9, 6, 6, 6, 8, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 12, 6, 6, 6, 11, 6, 6, 6, 10, 6, 6, 6, 9, 6, 6, 6, 8, 6, 6, 6, 7, 6, 6, 6, 12, 5, 5, 5, 11, 5, 5, 5, 10, 5, 5, 5, 9, 5, 5, 5, 8, 5, 5, 5, 7, 5, 5, 5, 6, 5, 5, 5, 5, 12, 5, 5, 5, 11, 5, 5, 5, 10, 5, 5, 5, 9, 5, 5, 5, 8, 5, 5, 5, 7, 5, 5, 5, 6, 5, 5, 5, 5, 5, 12, 5, 5, 5, 11, 5, 5, 5, 10, 5, 5, 5, 9, 5, 5, 5, 8, 5, 5, 5, 7, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 12, 5, 5, 5, 11, 5, 5, 5, 10, 5, 5, 5, 9, 5, 5, 5, 8, 5, 5, 5, 7, 5, 5, 5, 6, 5, 5, 5, 12, 4, 4, 4, 11, 4, 4, 4, 10, 4, 4, 4, 9, 4, 4, 4, 8, 4, 4, 4, 7, 4, 4, 4, 6, 4, 4, 4, 5, 4, 4, 4, 4, 12, 4, 4, 4, 11, 4, 4, 4, 10, 4, 4, 4, 9, 4, 4, 4, 8, 4, 4, 4, 7, 4, 4, 4, 6, 4, 4, 4, 5, 4, 4, 4, 4, 4, 12, 4, 4, 4, 11, 4, 4, 4, 10, 4, 4, 4, 9, 4, 4, 4, 8, 4, 4, 4, 7, 4, 4, 4, 6, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 12, 4, 4, 4, 11, 4, 4, 4, 10, 4, 4, 4, 9, 4, 4, 4, 8, 4, 4, 4, 7, 4, 4, 4, 6, 4, 4, 4, 5, 4, 4, 4, 12, 3, 3, 3, 11, 3, 3, 3, 10, 3, 3, 3, 9, 3, 3, 3, 8, 3, 3, 3, 7, 3, 3, 3, 6, 3, 3, 3, 5, 3, 3, 3, 4, 3, 3, 3, 3, 12, 3, 3, 3, 11, 3, 3, 3, 10, 3, 3, 3, 9, 3, 3, 3, 8, 3, 3, 3, 7, 3, 3, 3, 6, 3, 3, 3, 5, 3, 3, 3, 4, 3, 3, 3, 3, 3, 12, 3, 3, 3, 11, 3, 3, 3, 10, 3, 3, 3, 9, 3, 3, 3, 8, 3, 3, 3, 7, 3, 3, 3, 6, 3, 3, 3, 5, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 12, 3, 3, 3, 11, 3, 3, 3, 10, 3, 3, 3, 9, 3, 3, 3, 8, 3, 3, 3, 7, 3, 3, 3, 6, 3, 3, 3, 5, 3, 3, 3, 4, 3, 3, 3, 12, 2, 2, 2, 11, 2, 2, 2, 10, 2, 2, 2, 9, 2, 2, 2, 8, 2, 2, 2, 7, 2, 2, 2, 6, 2, 2, 2, 5, 2, 2, 2, 4, 2, 2, 2, 3, 2, 2, 2, 2, 12, 2, 2, 2, 11, 2, 2, 2, 10, 2, 2, 2, 9, 2, 2, 2, 8, 2, 2, 2, 7, 2, 2, 2, 6, 2, 2, 2, 5, 2, 2, 2, 4, 2, 2, 2, 3, 2, 2, 2, 2, 2, 12, 2, 2, 2, 11, 2, 2, 2, 10, 2, 2, 2, 9, 2, 2, 2, 8, 2, 2, 2, 7, 2, 2, 2, 6, 2, 2, 2, 5, 2, 2, 2, 4, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 12, 2, 2, 2, 11, 2, 2, 2, 10, 2, 2, 2, 9, 2, 2, 2, 8, 2, 2, 2, 7, 2, 2, 2, 6, 2, 2, 2, 5, 2, 2, 2, 4, 2, 2, 2, 3, 2, 2, 2, 12, 1, 1, 1, 11, 1, 1, 1, 10, 1, 1, 1, 9, 1, 1, 1, 8, 1, 1, 1, 7, 1, 1, 1, 6, 1, 1, 1, 5, 1, 1, 1, 4, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 12, 1, 1, 1, 11, 1, 1, 1, 10, 1, 1, 1, 9, 1, 1, 1, 8, 1, 1, 1, 7, 1, 1, 1, 6, 1, 1, 1, 5, 1, 1, 1, 4, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 12, 1, 1, 1, 11, 1, 1, 1, 10, 1, 1, 1, 9, 1, 1, 1, 8, 1, 1, 1, 7, 1, 1, 1, 6, 1, 1, 1, 5, 1, 1, 1, 4, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 12, 1, 1, 1, 11, 1, 1, 1, 10, 1, 1, 1, 9, 1, 1, 1, 8, 1, 1, 1, 7, 1, 1, 1, 6, 1, 1, 1, 5, 1, 1, 1, 4, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 12, 0, 0, 0, 11, 0, 0, 0, 10, 0, 0, 0, 9, 0, 0, 0, 8, 0, 0, 0, 7, 0, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 12, 0, 0, 0, 11, 0, 0, 0, 10, 0, 0, 0, 9, 0, 0, 0, 8, 0, 0, 0, 7, 0, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 12, 0, 0, 0, 11, 0, 0, 0, 10, 0, 0, 0, 9, 0, 0, 0, 8, 0, 0, 0, 7, 0, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 11, 0, 0, 0, 10, 0, 0, 0, 9, 0, 0, 0, 8, 0, 0, 0, 7, 0, 0, 0, 6, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0];

const heightsMax = [[6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
[12, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
[12, 12, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
[12, 12, 12, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4],
[12, 12, 12, 12, 6, 4, 4, 4, 4, 4, 4, 4, 4],
[12, 12, 12, 12, 12, 6, 4, 4, 4, 4, 4, 4, 4],
[12, 12, 12, 12, 12, 12, 6, 4, 4, 4, 4, 4, 4],
[12, 12, 12, 12, 12, 12, 12, 6, 4, 4, 4, 4, 4],
[12, 12, 12, 12, 12, 12, 12, 12, 6, 4, 4, 4, 4],
[12, 12, 12, 12, 12, 12, 12, 12, 12, 6, 4, 4, 4],
[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 6, 4, 4],
[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 6, 4],
[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 6]];

const labelPositions = [
    { x: 284, y: 60, chipx: 0, chipy: 80 },
    { x: 490, y: 90, chipx: -40, chipy: 80 },
    { x: 490, y: 370, chipx: 10, chipy: -75 },
    { x: 284, y: 420, chipx: -90, chipy: -50 },
    { x: 75, y: 370, chipx: -10, chipy: -75 },
    { x: 75, y: 90, chipx: 40, chipy: 80 }
];

const chipValues = [
    { color: 'Black', value: 100, width: 30, height: 10 },
    { color: 'Green', value: 25, width: 28, height: 10 },
    { color: 'Yellow', value: 10, width: 26, height: 10 },
    { color: 'Blue', value: 5, width: 24, height: 10 },
    { color: 'Red', value: 1, width: 22, height: 10 },
    { color: 'White', value: 0.5, width: 20, height: 10 }
];
const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const suits = { 's': 'black', 'c': 'green', 'h': 'red', 'd': 'blue', };
const suitsSymbols = { 's': '♠', 'c': '♣', 'h': '♥', 'd': '♦', };
document.addEventListener('DOMContentLoaded', () => {
    let rows;
    let headers;

    let questions;
    let questionIndex;


    let popupLastHand = {};
    let popupCurrentHand = {};

    let tableSetup = {};


    const canvas = document.getElementById('pokerTable');
    const ctx = canvas.getContext('2d');
    const feedback = document.getElementById('feedback');
    const buttonsDiv = document.getElementById('buttons');
    const quizQuestionDiv = document.getElementById('quiz_question');

    const currentHandRangeBtn = document.getElementById('current_hand_range_button');
    const lastHandRangeBtn = document.getElementById('last_hand_range_button');

    currentHandRangeBtn.addEventListener('click', () => {
        if (currentHandRangeBtn.innerHTML == "Show Current Range") {
            currentHandRangeBtn.innerHTML = "Hide Current Range";
            lastHandRangeBtn.innerHTML = "Show Last Range";
            drawRangeMatrix(popupCurrentHand.ranges, popupCurrentHand.actions);
        } else {
            currentHandRangeBtn.innerHTML = "Show Current Range";
            lastHandRangeBtn.innerHTML = "Show Last Range";
            drawTable();
        }
    });

    lastHandRangeBtn.addEventListener('click', () => {
        if (lastHandRangeBtn.innerHTML == "Show Last Range") {
            currentHandRangeBtn.innerHTML = "Show Current Range";
            lastHandRangeBtn.innerHTML = "Hide Last Range";
            drawRangeMatrix(popupLastHand.ranges, popupLastHand.actions);
        } else {
            currentHandRangeBtn.innerHTML = "Show Current Range";
            lastHandRangeBtn.innerHTML = "Show Last Range";
            drawTable();
        }
    });


    const RFI_Checkbox = document.getElementById("RFI_Checkbox");
    const BBDEF_Checkbox = document.getElementById("BBDEF_Checkbox");
    const SBDEF_Checkbox = document.getElementById("SBDEF_Checkbox");
    const IP3BET_Checkbox = document.getElementById("IP3BET_Checkbox");




    //Load TSV file
    fetchTSVFile();
    function fetchTSVFile() {
        const timestamp = new Date().getTime(); // Unique query parameter
        fetch(`https://kebabserver.github.io/kebab/RangeTrainer/Preflop.tsv?ts=${timestamp}`)
            .then(response => {
                if (!response.ok) {
                    printText('No connection.');
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                rows = data.split('\n').map(row => row.split('\t'));
                headers = rows[0];
                printText('Ranges loaded successfully.');
                loadNewQuiz();
            })
            .catch(error => {
                printText('Error fetching range files.');
                console.error('Error fetching TSV file:', error);
            });
    }

    //Print text to console
    function printText(text) {
        feedback.textContent = text;
    }

    //Load a new quiz
    function loadNewQuiz() {
        if (!rows) {
            printText('Error loading ranges.');
            return;
        }

        //Check Options
        const validQuizTypes = [];
        if (RFI_Checkbox.checked) { validQuizTypes.push("RFI"); }
        if (BBDEF_Checkbox.checked) { validQuizTypes.push("BBDEF"); }
        if (SBDEF_Checkbox.checked) { validQuizTypes.push("SBDEF"); }
        if (IP3BET_Checkbox.checked) { validQuizTypes.push("IP3BET"); }
        if (validQuizTypes.length === 0) {
            return;
        }
        questions = [];
        let popupActions = [];
        let popupRanges = [];

        let randomRow = rows[Math.floor(Math.random() * (rows.length - 1)) + 1];
        let quizType = randomRow[headers.indexOf("QuizType")];
        //Build Quiz
        while (!validQuizTypes.includes(quizType)) {
            randomRow = rows[Math.floor(Math.random() * (rows.length - 1)) + 1];
            quizType = randomRow[headers.indexOf("QuizType")];
        }

        const QuizRange = randomRow[headers.indexOf("QuizRange")].split(" ");
        let randomHandIndex = Math.floor(Math.random() * (1326));
        while (QuizRange[randomHandIndex] == 0) {
            randomHandIndex = Math.floor(Math.random() * (1326));
        }

        // popupLastHand = JSON.parse(JSON.stringify(popupCurrentHand));
        let index = 1;
        while (randomRow[headers.indexOf("Action" + index)] != "" && randomRow[headers.indexOf("Action" + index)] != undefined) {
            const range = randomRow[headers.indexOf("Range" + index)].split(" ");
            correctFrequency = parseFloat(range[randomHandIndex]);
            let globalCombos = 0;
            for (let i = 0; i < range.length; i++) {
                globalCombos += parseFloat(range[i]);

            }
            let question = {
                action: randomRow[headers.indexOf("Action" + index)],
                answerOptions: randomRow[headers.indexOf("Options" + index)],
                correctFrequency: correctFrequency,
                correctFreqBucket: (Math.round(correctFrequency * 100 / 25) * 25) + "%",
                globalCombos: Math.round(globalCombos * 10) / 10,
            };
            questions.push(question);
            popupRanges.push(range);
            popupActions.push(randomRow[headers.indexOf("Action" + index)]);
            index++;
        }
        popupCurrentHand.ranges = popupRanges;
        popupCurrentHand.actions = popupActions;

        tableSetup.heroPos = randomRow[headers.indexOf("Position")];
        tableSetup.invested = randomRow[headers.indexOf("Invested")].split(" ");
        tableSetup.positions = ["UTG", "HJ", "CO", "BTN", "SB", "BB"];
        while (tableSetup.heroPos != tableSetup.positions[3]) {
            tableSetup.positions.push(tableSetup.positions.shift());
            tableSetup.invested.push(tableSetup.invested.shift());
        }

        tableSetup.holdingCards = randomRow[headers.indexOf("HoldingCards")];
        tableSetup.board = randomRow[headers.indexOf("Board")]
        tableSetup.heroHand = cardOrder[randomHandIndex];
        drawTable();
        questionIndex = 0;

        loadNextQuestion();

    }


    //Draw popup
    function drawRangeMatrix(ranges, actions) {
        ctx.fillStyle = "#1e1e1e";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let colorsf_multi = [[[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []],
        [[], [], [], [], [], [], [], [], [], [], [], [], []]];
        for (let x = 0; x < 13; x++) {
            for (let y = 0; y < 13; y++) {
                for (let i = 0; i < actions.length; i++) {
                    colorsf_multi[y][x].push(0);
                }
            }
        }
        for (let i = 0; i < 1326; i++) {
            for (let j = 0; j < ranges.length; j++) {
                colorsf_multi[cardOrderX[i]][cardOrderY[i]][j] += parseFloat(ranges[j][i]);
            }
        }


        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 13; j++) {
                let tempX = 0;
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 1; // Set border thickness
                ctx.strokeRect(j * 34, i * 34, 34, 34);
                for (let k = 0; k < actions.length; k++) {
                    const tempWidth = colorsf_multi[i][j][k] / heightsMax[i][j];
                    if (actions[k] == "Call" || actions[k] == "Check") {
                        ctx.fillStyle = 'green'; // Dark green for poker table
                    } else {
                        ctx.fillStyle = 'red'; // Dark green for poker table
                    }
                    ctx.fillRect(j * 34 + 1 + tempX * 32, i * 34 + 1, 32 * (tempWidth), 32);
                    tempX += tempWidth;
                }
                ctx.fillStyle = 'white';
                ctx.font = '14px Arial';
                ctx.textAlign = 'center';
                if (j > i) {
                    ctx.fillText(cards[i] + cards[j] + 's', j * 34 + 16, i * 34 + 16);
                } else if (i == j) {
                    ctx.fillText(cards[j] + cards[i], j * 34 + 16, i * 34 + 16);
                } else {
                    ctx.fillText(cards[j] + cards[i] + 'o', j * 34 + 16, i * 34 + 16);
                }
            }
        }

        for (let i = 0; i < ranges.length; i++) {
            ctx.fillStyle = 'black';
            ctx.fillRect(446, i * 30 + 7, 118, 26);
            ctx.strokeStyle = 'gray';
            ctx.lineWidth = 2; // Set border thickness
            ctx.strokeRect(446, i * 30 + 7, 118, 26);
            if (actions[i] == "Call" || actions[i] == "Check") {
                ctx.fillStyle = 'green'; // Dark green for poker table
            } else {
                ctx.fillStyle = 'red'; // Dark green for poker table
            }
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(actions[i], 500, i * 30 + 22);
        }
    }

    // Draw the poker table
    function drawTable() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw table (ellipse to match the original design)
        ctx.beginPath();
        ctx.ellipse(284, 230, 280, 180, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#146C43'; // Dark green for poker table
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF'; // White border
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();

        // Draw board
        if (tableSetup.board != "PRE") {
            drawBoard();
        }

        // Draw player positions
        for (let index = 0; index < tableSetup.positions.length; index++) {
            let pos = labelPositions[index];
            drawPosition(pos.x, pos.y, tableSetup.positions[index], tableSetup.invested[index], pos.chipx, pos.chipy, tableSetup.holdingCards.includes(tableSetup.positions[index])); //  invested[index]
        }

        //Draw Hero Hand
        drawHerohand(tableSetup.heroHand.slice(0, 2), 0);
        drawHerohand(tableSetup.heroHand.slice(2), 60);
    }


    // Draw a player position
    function drawPosition(x, y, positionLabel, chips, chipx, chipy, hasCards) {
        if (hasCards) {
            ctx.beginPath();
            ctx.rect(x - 38, y - 60, 36, 50);
            ctx.fillStyle = 'red'; // White background for cards
            ctx.fill();
            ctx.strokeStyle = '#000000'; // Black border
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.rect(x + 2, y - 60, 36, 50);
            ctx.fillStyle = 'red'; // White background for cards
            ctx.fill();
            ctx.strokeStyle = '#000000'; // Black border
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        }

        // Draw position rectangle (gray background)
        ctx.beginPath();
        ctx.rect(x - 45, y - 25, 90, 50); // Rectangular shape
        ctx.fillStyle = '#333333'; // Gray background
        ctx.fill();
        ctx.strokeStyle = 'white'; // White border
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Draw label text
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(positionLabel, x, y);

        // Draw dealer button if applicable
        if (positionLabel === "BTN") {
            ctx.beginPath();
            ctx.arc(x + 60, y, 15, 0, Math.PI * 2);
            ctx.fillStyle = 'yellow';
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();

            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText('D', x + 60, y);
        }

        drawChips(x + chipx, y + chipy, chips)
    }

    // Draw board cards
    function drawBoard() {
        // Draw rectangle for the board
        ctx.beginPath();
        ctx.rect(200, 260, 200, 80); // Centered rectangular board
        ctx.fillStyle = '#444444'; // Dark gray background
        ctx.fill();
        ctx.strokeStyle = 'white'; // White border
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Add sample cards (e.g., A♠ T♥ 8♦)
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(board, 300, 300); // Center text
    }
    // Draw hero cards
    function drawHerohand(handString, dx) {
        ctx.beginPath();
        ctx.rect(228 + dx, 310, 56, 80);
        ctx.fillStyle = '#FFFFFF'; // White background for cards
        ctx.fill();
        ctx.strokeStyle = '#000000'; // Black border
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Extract card rank and suit
        const rank = handString.slice(0, -1); // Everything except the last character
        const suit = handString.slice(-1); // Last character (♠, ♥, ♣, ♦)

        // Draw rank and suit
        ctx.fillStyle = suits[suit]; // Suit color (black or red)
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Draw rank
        ctx.fillText(rank, 238 + dx + 36 / 2, 322 + 50 / 3);

        // Draw suit
        ctx.fillText(suitsSymbols[suit], 238 + dx + 36 / 2, 336 + (2 * 50) / 3);

    }
    // Draw poker chips
    function drawChips(x, y, amount) {
        if (amount == 0) {
            return;
        }
        let tempAmount = amount;
        // const stackHeight = Math.min(Math.ceil(amount / 10), 5); // Max 5 chips visually
        // const chipColors = ['#1E90FF', '#C0C0C0', '#CD7F32']; // Gold, silver, bronze chips
        let chips = [];
        for (let i = 0; i < chipValues.length; i++) {
            let chipCount = Math.floor(tempAmount / chipValues[i].value); // Number of chips of this type
            tempAmount -= chipCount * chipValues[i].value; // Subtract the value of these chips from the total

            // Add the correct number of chips to the array
            for (let j = 0; j < chipCount; j++) {
                chips.push(chipValues[i]);
            }
        }

        for (let i = 0; i < chips.length; i++) {
            ctx.beginPath();
            ctx.ellipse(x, y - i * 10, chips[i].width, chips[i].height, 0, 0, Math.PI * 2); // Chip as an oval 24 10
            ctx.fillStyle = chips[i % chips.length].color;
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
        }

        // Draw chip count
        ctx.fillStyle = 'black';
        ctx.font = 'bold 22px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${amount} BB`, x, y - chips.length * 10 - 11);
    }



    function loadNextQuestion() {
        const question = questions[questionIndex];
        if (question == null) {
            loadNewQuiz();
            return;
        }
        const answerOptions = question.answerOptions.split(" ");
        if (question.action == "Call" || question.action == "Check") {
            quizQuestionDiv.innerHTML = '<span style="color: green;">' + question.action + '</span>';
        } else {
            quizQuestionDiv.innerHTML = '<span style="color: red;">' + question.action + '</span>';
        }
        buttonsDiv.innerHTML = "";

        for (let index = 0; index < answerOptions.length; index++) {
            const btn = document.createElement('button');
            btn.textContent = answerOptions[index];
            // Add click event listener
            btn.addEventListener('click', () => checkIfCorrectAction(answerOptions[index]));
            buttonsDiv.appendChild(btn);
        }
    }

    function checkIfCorrectAction(answer) {
        const question = questions[questionIndex];
        if (answer == question.correctFreqBucket) {
            feedback.innerHTML = 'Correct! Frequency was <span style="color: pink;">' + parseFloat(question.correctFrequency) * 100.0 + "%</span>";
            feedback.innerHTML += '<br>Global frequency: <span style="color: pink;">' + Math.round(parseFloat(question.globalCombos) / 1.326) / 10.0 + "% (" + question.globalCombos + "c)</span>";
            questionIndex++;
            loadNextQuestion();
        } else {
            feedback.innerHTML = 'Incorrect. Correct answer: <span style="color: pink;">' + parseFloat(question.correctFrequency) * 100.0 + "%</span>";
            feedback.innerHTML += '<br>Global frequency: <span style="color: pink;">' + Math.round(parseFloat(question.globalCombos) / 1.326) / 10.0 + "% (" + question.globalCombos + "c)</span>";

        }
    }

});
