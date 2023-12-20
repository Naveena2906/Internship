package naveena.task1.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import naveena.task1.Model.Product;
import naveena.task1.Repository.Productrepo;

@Service
public class ProductService {
    @Autowired
    public Productrepo pr;
    public List<Product> getproduct()
    {
        return pr.findAll();
    }
    public String postproduct(Product pp)
    {
        pr.save(pp);
        return "Posted Successfully";
    }
    public String updateproduct(Product pp)
    {
        pr.save(pp);
        return "Updated Successfully";
    }
    public String deleteproduct(int pid)
    {
        pr.deleteById(pid);
        return "deleted";
    }
    public Optional<Product> getBypid(int pid)
    {
        return pr.findById(pid);
    }
}
