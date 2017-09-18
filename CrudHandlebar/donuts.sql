SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
CREATE Database db_leccin_script;
Use db_leccin_script;
--
-- Database: `db_diagramas`
--
-- --------------------------------------------------------
--
-- Table structure for table `diagrama`
--
CREATE TABLE IF NOT EXISTS `donuts` (
  `id` varchar(50) NOT NULL,
  `tipo` varchar(500) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `ppu` varchar(100) DEFAULT NULL,
  `batters` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--
-- Dumping data for table `diagrama`
--
INSERT INTO `donuts` (`id`, `tipo`,`nombre`, `ppu`, `batters`) VALUES
('1', 'Tipo a' ,'Kevin', '1','2'),
('2', 'Tipo b' ,'Andrea', '1','2'),
('3', 'Tipo c' ,'Tamara', '1','2'),
('4', 'Tipo d' ,'Mayiya', '1','2'),
('5', 'Tipo d' ,'Robinson', '1','2');
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
