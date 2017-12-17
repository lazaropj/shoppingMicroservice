package com.integritas.repository;

import com.integritas.domain.Cart;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Cart entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    @Query("select distinct cart from Cart cart left join fetch cart.products")
    List<Cart> findAllWithEagerRelationships();

    @Query("select cart from Cart cart left join fetch cart.products where cart.id =:id")
    Cart findOneWithEagerRelationships(@Param("id") Long id);

}
