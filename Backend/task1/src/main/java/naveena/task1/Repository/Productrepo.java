package naveena.task1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import naveena.task1.Model.Product;

@Repository
public interface Productrepo extends JpaRepository<Product,Integer>{
    
}
