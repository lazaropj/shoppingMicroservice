package com.integritas.web.rest;

import com.google.common.collect.Sets;
import com.integritas.CheckoutApp;
import com.integritas.domain.Cart;
import com.integritas.domain.Product;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CheckoutApp.class)
public class JMSTest {

    @Autowired
    private JmsTemplate jmsTemplate;

    @Test
    public void sendJMSMessage(){
        Product product = new Product();
        product.setId(1L);
        product.setName("Name of product");
        product.setDescription("Description of product");
        product.setPrice(new BigDecimal("30"));

        Cart cart = new Cart();
        cart.setId(1L);
        cart.setTotal(new BigDecimal("30"));
        cart.setProducts(Sets.newHashSet(product));


        jmsTemplate.convertAndSend("integritas-cart", cart);

    }

    @Test
    public void consumeJMSMessage(){
        Cart cart = (Cart) jmsTemplate.receiveAndConvert("integritas-cart");
        Assert.assertNotNull(cart);
    }
}
